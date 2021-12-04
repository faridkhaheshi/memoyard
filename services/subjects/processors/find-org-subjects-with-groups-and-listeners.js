import db from "../../../adapters/db"

const findOrgSubjectsWithGroupsAndListeners = async ({ userExId, orgSlug }) => {
  const { records: subjects } = await db.query(
    `
    SELECT
      s.ex_id,
      s.name,
      s.active,
      s.created_at,
      s.updated_at,
      (
        SELECT 
          COALESCE(
            TO_JSON(
              ARRAY_AGG(
                JSON_BUILD_OBJECT(
                  'ex_id', g.ex_id,
                  'name', g.name,
                  'active', g.active,
                  'created_at', g.created_at,
                  'subject_group_ex_id', sg.ex_id
                )
                ORDER BY sg.created_at ASC
              ) FILTER (where g.id IS NOT NULL)
            ),
            '[]'::JSON
          )
        FROM
          yard.subject_groups sg
              JOIN yard.groups g ON sg.group_id=g.id
        WHERE
          sg.subject_id=s.id
            AND
          sg.active = true
            AND
          g.active = true
      ) AS groups,
      (
        SELECT 
          COALESCE(
            TO_JSON(
              ARRAY_AGG(
                JSON_BUILD_OBJECT(
                  'ex_id', u.ex_id,
                  'first_name', u.first_name,
                  'last_name', u.last_name,
                  'active', u.active,
                  'created_at', u.created_at,
                  'subject_listener_ex_id', sl.ex_id
                )
                ORDER BY sl.created_at ASC
              ) FILTER (where u.id IS NOT NULL)
            ),
            '[]'::JSON
          )
        FROM
          yard.subject_listeners sl
              JOIN yard.users u ON sl.user_id=u.id
        WHERE
          sl.subject_id=s.id
            AND
          sl.active = true
            AND
          u.active = true
      ) AS listeners
    FROM
      yard.subjects s
        JOIN yard.organizations o ON s.org_id=o.id
        JOIN yard.users u ON o.creator_id=u.id
    WHERE
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

  return subjects.map(({ groups, listeners, ...others }) => ({
    ...others,
    groups: JSON.parse(groups),
    listeners: JSON.parse(listeners),
  }))
}

export default findOrgSubjectsWithGroupsAndListeners
