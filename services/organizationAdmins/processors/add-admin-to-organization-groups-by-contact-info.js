import db from "../../../adapters/db"

const addAdminToOrganizationGroupsByContactInfo = async ({
  userExId,
  orgSlug,
  groups,
  adminInfo: { email, firstName, lastName, userType = "normal" },
}) => {
  const results = await db
    .transaction()
    .query(
      `
    WITH new_user AS (
      INSERT INTO
        yard.users (email, user_type, first_name, last_name)
      SELECT :email, :userType, :firstName, :lastName
      WHERE NOT EXISTS (SELECT * FROM yard.users u WHERE u.email=:email LIMIT 1)
      RETURNING *
    )
    SELECT * FROM new_user
      UNION
    SELECT * FROM  yard.users u WHERE u.email = :email LIMIT 1;
  `,
      { email, userType, firstName, lastName }
    )
    .query(({ records }) => [
      `
        INSERT INTO
          yard.organization_admins (
            user_id,
            org_id,
            creator_id,
            first_name,
            last_name
          )
        VALUES (
          :userId,
          (
            SELECT o.id
            FROM
              yard.organizations o
                JOIN yard.users u ON o.creator_id=u.id
            WHERE
              o.slug::text=:orgSlug
                AND
              u.ex_id::text=:userExId
            LIMIT 1
          ),
          ( SELECT u.id FROM yard.users u WHERE u.ex_id::text=:userExId LIMIT 1),
          :firstName,
          :lastName
        )
        ON CONFLICT ON CONSTRAINT organization_admins_user_id_org_id_key
          DO UPDATE SET active=EXCLUDED.active
        RETURNING
          id,
          ex_id,
          active,
          first_name,
          last_name,
          created_at,
          updated_at
      `,
      { userId: records[0].id, orgSlug, userExId, firstName, lastName },
    ])
    .query(({ records }) => [
      `
        INSERT INTO
          yard.admin_groups (
            admin_id,
            group_id,
            creator_id,
            org_id
          )
        VALUES (
          :adminId,
          (
            SELECT
              g.id
            FROM
              yard.groups g
            WHERE
              g.ex_id::text=:groupExId
                AND
              g.active=true
            LIMIT 1
          ),
          (SELECT u.id FROM yard.users u WHERE u.ex_id::text=:userExId LIMIT 1),
          (
            SELECT
              o.id
            FROM
              yard.organizations o
                JOIN yard.users u ON o.creator_id=u.id
            WHERE
              u.ex_id::text=:userExId
                AND
              o.slug=:orgSlug
                AND
              u.active=true
                AND
              o.active=true
            LIMIT 1
          )
        )
        ON CONFLICT ON CONSTRAINT admin_groups_admin_id_group_id_org_id_key
          DO UPDATE SET active=EXCLUDED.active
        RETURNING 
          id,
          ex_id,
          active,
          admin_id,
          group_id,
          org_id,
          creator_id,
          created_at,
          updated_at
      `,
      groups.map(groupExId => [
        { adminId: records[0].id, groupExId, userExId, orgSlug },
      ]),
    ])
    .commit()

  return results[1].records[0]
}

export default addAdminToOrganizationGroupsByContactInfo
