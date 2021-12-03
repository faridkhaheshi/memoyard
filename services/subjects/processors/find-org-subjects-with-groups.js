import db from "../../../adapters/db"

const findOrgSubjectsWithGroups = async ({ userExId, orgSlug }) => {
  const { records: subjects } = await db.query(
    `
    SELECT
      s.ex_id,
      s.name,
      s.active,
      s.created_at,
      s.updated_at,
      COALESCE(
        TO_JSON(
          ARRAY_AGG(
            CASE 
              WHEN g.id IS NOT NULL 
                THEN
                  JSON_BUILD_OBJECT(
                    'ex_id', g.ex_id,
                    'name', g.name,
                    'active', g.active,
                    'created_at', g.created_at
                  )
            END
          ) FILTER (where g.id IS NOT NULL)
        ),
        '[]'::JSON
      ) AS groups
    FROM
      yard.subjects s
        LEFT JOIN yard.subject_groups sg ON s.id=sg.subject_id
          LEFT JOIN yard.groups g ON sg.group_id=g.id
        JOIN yard.organizations o ON s.org_id=o.id
        JOIN yard.users u on o.creator_id=u.id
    WHERE
      o.slug=:orgSlug
        AND
      u.ex_id::text=:userExId
        AND
      (sg.active = true OR sg.active IS NULL)
        AND
      (g.active =true OR g.active IS NULL)
        AND
      u.active=true
        AND
      o.active=true
    GROUP BY 
      s.ex_id,
      s.name,
      s.active,
      s.created_at,
      s.updated_at
    ORDER BY s.created_at DESC
  `,
    { userExId, orgSlug }
  )

  return subjects.map(({ groups, ...others }) => ({
    ...others,
    groups: JSON.parse(groups),
  }))
}

export default findOrgSubjectsWithGroups
