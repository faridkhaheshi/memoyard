import db from "../../../adapters/db"

const updateOrgSubject = async ({
  subjectExId,
  userExId,
  update: { name = null, active = null },
  groupExId = null,
}) => {
  const results = await db
    .transaction()
    .query(
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
      s.id,
      s.ex_id,
      s.name,
      s.active,
      s.created_at,
      s.updated_at
  `,
      { name, active, subjectExId, userExId }
    )
    .query(({ records }) => [
      groupExId
        ? `
          WITH updated_subject_groups AS (
            UPDATE
              yard.subject_groups sg
            SET
              active=false
            WHERE
              sg.subject_id=:subjectId
            RETURNING
              sg.id,
              sg.ex_id,
              sg.active,
              sg.created_at,
              sg.updated_at
          )
          SELECT
            :subjectId AS id
        `
        : `SELECT :subjectId AS id`,
      { subjectId: records[0].id },
    ])
    .query(({ records }) => [
      groupExId
        ? `
        INSERT INTO
          yard.subject_groups (
            creator_id,
            subject_id,
            group_id,
            org_id,
            active
          )
        VALUES (
          (SELECT id FROM yard.users u WHERE u.ex_id::text=:userExId LIMIT 1),
          :subjectId,
          (SELECT id FROM yard.groups g WHERE g.ex_id::text=:groupExId LIMIT 1),
          (SELECT org_id FROM yard.groups g WHERE g.ex_id::text=:groupExId LIMIT 1),
          true
        )
        ON CONFLICT ON CONSTRAINT subject_groups_org_id_subject_id_group_id_key
          DO UPDATE SET active=EXCLUDED.active
        RETURNING
          ex_id,
          active,
          created_at,
          updated_at
      `
        : `SELECT :subjectId AS id`,
      { subjectId: records[0].id, groupExId, userExId },
    ])
    .commit()

  return results[0].records[0]
}

export default updateOrgSubject
