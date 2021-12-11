import { NotAuthorizedError } from "restify-errors"
import db from "../../../adapters/db"

const getOrgInfoForAdmin = async ({ userExId, orgSlug }) => {
  const { records: userOrgs } = await db.query(
    `
    SELECT
      o.ex_id,
      o.name,
      o.slug,
      o.active,
      o.created_at,
      o.updated_at,
      u.ex_id as creator_ex_id
    FROM
      yard.organizations o
        JOIN yard.users u ON o.creator_id=u.id
        LEFT JOIN yard.organization_admins oa ON oa.org_id=o.id
        LEFT JOIN yard.users au ON oa.user_id=au.id
    WHERE
      o.active=true
        AND
      o.slug=:orgSlug
        AND
      (
        (u.ex_id::text=:userExId AND u.active=true)
          OR
        (au.ex_id::text=:userExId AND au.active=true AND oa.active=true)
      )
    LIMIT 1
  `,
    { userExId, orgSlug }
  )

  if (userOrgs.length < 1)
    throw new NotAuthorizedError(
      `User is not authorized to add media to the organization with slug ${orgSlug}`
    )
  return userOrgs[0]
}

export default getOrgInfoForAdmin
