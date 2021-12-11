import db from "../../../adapters/db"

const findUserObservableTags = async ({ userExId, slug = null }) => {
  const { records: tags } = await db.query(
    `
      WITH admin_groups AS (
        SELECT
          g.id,
          g.ex_id,
          g.name,
          g.org_id,
          g.active,
          g.created_at,
          g.updated_at
        FROM
          yard.groups g
            JOIN yard.admin_groups ag ON g.id=ag.group_id
            JOIN yard.organization_admins oa ON ag.admin_id=oa.id
            JOIN yard.users u ON oa.user_id=u.id
            JOIN yard.organizations o ON oa.org_id=o.id
        WHERE
          u.ex_id::text=:userExId
            AND
          u.active=true
            AND
          g.active=true
            AND
          ag.active=true
            AND
          oa.active=true
            AND
          o.active=true
            AND
          1 = 
            CASE
              WHEN :slug::text IS NULL THEN 1
              WHEN :slug::text=o.slug THEN 1
              ELSE 0
            END
      ),
      admin_subjects AS (
        SELECT
          s.id,
          s.ex_id,
          s.name,
          s.org_id,
          s.active,
          s.created_at,
          s.updated_at
        FROM
          yard.subjects s
            JOIN yard.subject_groups sg ON sg.subject_id=s.id
            JOIN admin_groups ag ON ag.id=sg.group_id
        WHERE
          s.active=true
            AND
          sg.active=true
      ),
      user_organizations AS (
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
        ag.ex_id::text as id,
        ag.name as name,
        'group' as type,
        ag.ex_id::text as group_ex_id,
        null as subject_ex_id
      FROM admin_groups ag

      UNION

      SELECT
          aas.ex_id::text as id,
          aas.name as name,
          'subject' as type,
          null as group_ex_id,
          aas.ex_id::text as subject_ex_id
      FROM admin_subjects aas

      UNION

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
