import db from "../../../adapters/db"

const updateOrgSubject = async ({
  subjectExId,
  userExId,
  update: { name = null, active = null },
}) => {
  const { records } = await db.query(
    `
    WITH the_subject AS (
      SELECT
        s.*
      FROM
        yard.subjects s
          JOIN yard.organizations o ON s.org_id=o.id
          JOIN yard.users u ON o.creator_id=u.id
      WHERE
        u.ex_id::text=:userExId
          AND
        s.ex_id::text=:subjectExId
          AND
        o.active=true
          AND
        u.active=true
      LIMIT 1
    )
    UPDATE 
      yard.subjects s
    SET
      active = COALESCE(:active, ts.active),
      name = COALESCE(:name, ts.name)
    FROM
      the_subject ts
    WHERE
      s.id=ts.id
    RETURNING
      s.ex_id,
      s.name,
      s.active,
      s.created_at,
      s.updated_at
  `,
    { name, active, subjectExId, userExId }
  )

  return records[0]
}

export default updateOrgSubject
