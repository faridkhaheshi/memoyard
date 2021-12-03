import db from "../../../adapters/db"

const addSubjectToGroup = async ({
  orgSlug,
  subjectInfo: { name },
  groupExId,
  userExId,
}) => {
  const results = await db
    .transaction()
    .query(
      `
    INSERT INTO
      yard.subjects (
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
      id, 
      ex_id,
      name,
      active,
      created_at
  `,
      { orgSlug, userExId, name }
    )
    .query(({ records }) => [
      `
        INSERT INTO
          yard.subject_groups (
            creator_id,
            group_id,
            org_id,
            subject_id
          )
        VALUES (
          (SELECT id FROM yard.users u WHERE u.ex_id::text=:userExId),
          (SELECT id FROM yard.groups g WHERE g.ex_id::text=:groupExId),
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
          :subjectId
        )
        RETURNING
          ex_id,
          active,
          created_at
    `,
      { subjectId: records[0].id, orgSlug, groupExId, userExId },
    ])
    .commit()
  return results[0].records[0]
}

export default addSubjectToGroup
