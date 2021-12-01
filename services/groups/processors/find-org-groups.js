import db from "../../../adapters/db"

const findOrgGroups = async ({ userExId, orgSlug }) => {
  const { records: groups } = await db.query(
    `
    SELECT
      g.ex_id,
      g.name,
      g.active,
      g.created_at,
      g.updated_at
    FROM
      yard.groups g
        JOIN yard.organizations o ON g.org_id=o.id
        JOIN yard.users u ON o.creator_id=u.id
    WHERE
      o.slug=:orgSlug
        AND
      u.ex_id::text=:userExId
        AND
      u.active=true
        AND
      o.active=true
    ORDER BY g.created_at DESC
  `,
    { userExId, orgSlug }
  )

  return groups
}

export default findOrgGroups
