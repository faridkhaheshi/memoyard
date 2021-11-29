import db from "../../../adapters/db"

const findOrgSubjects = async ({ userExId, orgSlug }) => {
  const { records: subjects } = await db.query(
    `
    SELECT
      s.ex_id,
      s.name,
      s.active,
      s.created_at,
      s.updated_at
    FROM
      yard.subjects s
        JOIN yard.organizations o ON s.org_id=o.id
        JOIN yard.users u ON o.creator_id=u.id
    WHERE
      s.active=true
        AND
      o.slug=:orgSlug
        AND
      u.ex_id::text=:userExId
        AND
      u.active=true
        AND
      o.active=true
    ORDER BY s.created_at DESC
  `,
    { userExId, orgSlug }
  )

  return subjects
}

export default findOrgSubjects
