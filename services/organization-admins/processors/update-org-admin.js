import db from "../../../adapters/db"

const updateOrgAdmin = async ({
  organizationAdminExId,
  update: { first_name = null, last_name = null, active = null, groups = null },
  userExId,
  orgSlug = "",
}) => {
  const results = await db
    .transaction()
    .query(
      `
      WITH the_organization_admin AS (
        SELECT
          oa.*
        FROM
          yard.organization_admins oa
            JOIN yard.organizations o ON oa.org_id=o.id
            JOIN yard.users u ON o.creator_id=u.id
        WHERE
          u.ex_id::text=:userExId
            AND
          oa.ex_id::text=:organizationAdminExId
            AND
          o.active=true
            AND
          u.active=true
        LIMIT 1
      )
      UPDATE
        yard.organization_admins oa
      SET
        active = COALESCE(:active, toa.active),
        first_name = COALESCE(:first_name, toa.first_name),
        last_name = COALESCE(:last_name, toa.last_name)
      FROM
        the_organization_admin toa
      WHERE
        oa.id=toa.id
      RETURNING
        oa.id,
        oa.ex_id,
        oa.first_name,
        oa.last_name,
        oa.active,
        oa.created_at,
        oa.updated_at
    `,
      {
        userExId,
        first_name,
        last_name,
        active,
        organizationAdminExId,
        orgSlug,
      }
    )
    .query(({ records }) => [
      groups
        ? `
        WITH updated_admin_groups AS (
          UPDATE
            yard.admin_groups ag
          SET
            active = false
          WHERE
            ag.admin_id=:orgAdminId
          RETURNING
            *
        )
        SELECT
          :orgAdminId AS id
      `
        : "SELECT :orgAdminId AS id",
      { orgAdminId: records[0].id },
    ])
    .query(({ records }) => [
      groups
        ? `
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
      `
        : "SELECT :orgAdminId AS id",
      groups
        ? groups.map(groupExId => [
            { adminId: records[0].id, groupExId, userExId, orgSlug },
          ])
        : { orgAdminId: records[0].id },
    ])
    .commit()
  return results[0].records[0]
}

export default updateOrgAdmin
