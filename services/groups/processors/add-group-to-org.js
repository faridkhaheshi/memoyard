import db from "../../../adapters/db"

const addGroupToOrg = async ({ orgSlug, groupInfo: { name }, userExId }) => {
  const { records } = await db.query(
    `
    INSERT INTO
      yard.groups (
        name,
        org_id,
        creator_id
      )
    VALUES (
      :name,
      (
        SELECT 
          o.id 
        FROM 
          yard.organizations o
            JOIN yard.users u ON o.creator_id=u.id
        WHERE 
          o.slug=:orgSlug::text
            AND
          u.ex_id::text=:userExId
      ),
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

export default addGroupToOrg
