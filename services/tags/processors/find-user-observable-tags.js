import db from "../../../adapters/db"

const findUserObservableTags = async ({ userExId, slug = null }) => {
  const { records: tags } = await db.query(
    `
    WITH user_organizations AS (
      SELECT
        o.id,
        o.ex_id,
        o.name,
        o.slug
      FROM
        yard.organizations o
          JOIN yard.users u on o.creator_id = u.id
      WHERE
        u.ex_id::text=:userExId
          AND
        u.active=true
          AND
        o.active=true
          AND
        1 = 
          CASE
            WHEN :slug::text is null then 1
            WHEN :slug::text=o.slug then 1
            ELSE 0
          END

    ),
    user_subjects AS (
      SELECT
        s.id,
        s.ex_id,
        s.name,
      s.creator_id,
        s.org_id
      FROM
        yard.subjects s
          LEFT JOIN yard.subject_listeners sl on sl.subject_id=s.id
          LEFT JOIN yard.users u on sl.user_id=u.id
      WHERE
        (
          u.ex_id::text=:userExId
          OR
          s.org_id IN (SELECT uo.id from user_organizations uo)
        )
          AND
        u.active=true
          AND
        sl.active=true
          AND
        s.active=true
    ),
    user_groups AS (
        SELECT
          g.id,
          g.ex_id,
          g.name,
          g.creator_id,
          g.org_id
        FROM
          yard.groups g
            LEFT JOIN yard.subject_groups sg ON g.id=sg.group_id
            LEFT JOIN user_subjects us ON sg.subject_id=us.id
        WHERE
          (
              g.org_id IN (SELECT uo.id from user_organizations uo)
                OR
              us.id IS NOT NULL
            )
            AND
          g.active=true
    )
    SELECT
      ug.ex_id as id,
        ug.name as name,
        'group' as type,
        ug.ex_id as group_ex_id,
        null as subject_ex_id
    FROM user_groups ug

    UNION ALL

    SELECT
      us.ex_id as id,
        us.name as name,
        'subject' as type,
        null as group_ex_id,
        us.ex_id as subject_ex_id
    FROM user_subjects us
  `,
    { userExId, slug }
  )
  return tags
}

export default findUserObservableTags
