import db from "../../../adapters/db"

const updateOrgGroup = async ({
  groupExId,
  userExId,
  update: { name = null, active = null },
}) => {
  const { records } = await db.query(
    `
    WITH the_group AS (
      SELECT
        g.*
      FROM
        yard.groups g
          JOIN yard.organizations o ON g.org_id=o.id
          JOIN yard.users u ON g.creator_id=u.id
      WHERE
        u.ex_id::text=:userExId
          AND
        g.ex_id::text=:groupExId
          AND
        o.active=true
          AND
        u.active=true
      LIMIT 1
    )
    UPDATE 
      yard.groups g
    SET
      active = COALESCE(:active, tg.active),
      name = COALESCE(:name, tg.name)
    FROM
      the_group tg
    WHERE
      g.id=tg.id
    RETURNING
      g.ex_id,
      g.name,
      g.active,
      g.created_at,
      g.updated_at
  `,
    { name, active, groupExId, userExId }
  )

  return records[0]
}

export default updateOrgGroup
