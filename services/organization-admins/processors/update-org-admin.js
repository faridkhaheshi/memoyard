import db from "../../../adapters/db"

const updateOrgAdmin = async ({
  organizationAdminExId,
  update: { first_name = null, last_name = null, active = null },
  userExId,
}) => {
  const { records } = await db.query(
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
    }
  )
  return records[0]
}

export default updateOrgAdmin
