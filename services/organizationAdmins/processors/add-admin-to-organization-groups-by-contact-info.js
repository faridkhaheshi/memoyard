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
    .commit()

  return results
}

export default addAdminToOrganizationGroupsByContactInfo
