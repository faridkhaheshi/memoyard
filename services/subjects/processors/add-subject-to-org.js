import db from "../../../adapters/db"

const addSubjectToOrg = async ({
  orgSlug,
  subjectInfo: { name },
  userExId,
}) => {
  const { records } = await db.query(
    `
    INSERT INTO
      yard.subjects (
        name,
        org_id,
        creator_id
      )
    VALUES (
      :name,
      (SELECT id FROM yard.organizations WHERE slug=:orgSlug::text),
      (SELECT id FROM yard.users WHERE ex_id::text=:userExId)
    )
    RETURNING
      ex_id,
      name,
      active,
      created_at
  `,
    { orgSlug, userExId, name }
  )
  return records[0]
}

export default addSubjectToOrg
