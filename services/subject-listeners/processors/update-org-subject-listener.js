import db from "../../../adapters/db"

const updateOrgSubjectListener = async ({
  subjectListenerExId,
  userExId,
  update: { first_name = null, last_name = null, active = null },
}) => {
  const { records } = await db.query(
    `
    WITH the_subject_listener AS (
      SELECT
        sl.*
      FROM
        yard.subject_listeners sl
          JOIN yard.organizations o ON sl.org_id=o.id
          JOIN yard.users u ON o.creator_id=u.id
      WHERE
        u.ex_id::text=:userExId
          AND
        sl.ex_id::text=:subjectListenerExId
          AND
        o.active=true
          AND
        u.active=true
      LIMIT 1
    )
    UPDATE
      yard.subject_listeners sl
    SET
      active = COALESCE(:active, tsl.active),
      first_name = COALESCE(:first_name, tsl.first_name),
      last_name = COALESCE(:last_name, tsl.last_name)
    FROM 
      the_subject_listener tsl
    WHERE
      sl.id=tsl.id
    RETURNING
      sl.ex_id,
      sl.first_name,
      sl.last_name,
      sl.active,
      sl.created_at,
      sl.updated_at
  `,
    { userExId, subjectListenerExId, first_name, last_name, active }
  )

  return records[0]
}

export default updateOrgSubjectListener
