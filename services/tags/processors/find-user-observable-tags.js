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
  user_subjects as (
      select
          s.id,
          s.ex_id,
          s.name,
          s.creator_id,
          s.org_id
      from
          yard.subjects s
              JOIN yard.subject_listeners sl on sl.subject_id=s.id
              JOIN yard.users u on sl.user_id=u.id
              JOIN yard.organizations o on s.org_id=o.id
      where
          (
              u.ex_id::text=:userExId
          )
              AND
          u.active=true
            AND
          sl.active=true
            AND
          s.active=true
            AND
          1 = 
            CASE
              WHEN :slug::text is null THEN 1
              WHEN :slug::text=o.slug THEN 1
              ELSE 0
            END
  ),
  user_organization_subjects as (
      select
          s.id,
          s.ex_id,
          s.name,
          s.creator_id,
          s.org_id
      from
          yard.subjects s
              join user_organizations uo on s.org_id = uo.id
      where
          s.active=true
  ),
  user_subjects_groups as (
      select
          g.id,
          g.ex_id,
          g.name,
          g.creator_id,
          g.org_id
      from
          user_subjects us 
              join yard.subject_groups sg on us.id = sg.subject_id
              join yard.groups g on sg.group_id=g.id
              join yard.organizations o on g.org_id=o.id
      where
          sg.active = true
              and
          g.active = true
              and
          o.active = true
              and
          1 = 
              CASE
                  WHEN :slug::text is null THEN 1
                  WHEN :slug::text=o.slug THEN 1
                  ELSE 0
              END
  ),
  user_organization_groups as (
      select
          g.id,
          g.ex_id,
          g.name,
          g.creator_id,
          g.org_id
      from
          yard.groups g
              join user_organizations uo on g.org_id = uo.id
      where
          g.active=true
  )
  SELECT
      ug.ex_id::text as id,
      ug.name as name,
      'group' as type,
      ug.ex_id::text as group_ex_id,
      null as subject_ex_id
  FROM user_subjects_groups ug
  
  UNION
  
  SELECT
      uog.ex_id::text as id,
      uog.name as name,
      'group' as type,
      uog.ex_id::text as group_ex_id,
      null as subject_ex_id
  FROM user_organization_groups uog
  
  UNION
  
  SELECT
      us.ex_id::text as id,
      us.name as name,
      'subject' as type,
      null as group_ex_id,
      us.ex_id::text as subject_ex_id
  FROM user_subjects us
  
  UNION
  
  SELECT
      uos.ex_id::text as id,
      uos.name as name,
      'subject' as type,
      null as group_ex_id,
      uos.ex_id::text as subject_ex_id
  FROM user_organization_subjects uos
  `,
    { userExId, slug }
  )
  return tags
}

export default findUserObservableTags
