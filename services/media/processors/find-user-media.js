import db from "../../../adapters/db"

const findUserMedia = async ({
  userExId,
  slug,
  tag = null,
  tagType = null,
}) => {
  const { records: media } = await db.query(
    `
    WITH user_org AS (
      SELECT
        o.id,
        o.ex_id,
        o.slug,
        o.name
      FROM
          yard.organizations o
            JOIN yard.users u ON o.creator_id=u.id
      WHERE
          u.ex_id::text=:userExId
              AND
          u.active=true
              AND
          o.active=true
              AND
          o.slug=:slug
      LIMIT 1
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
          LEFT JOIN yard.subject_listeners sl ON sl.subject_id=s.id
          LEFT JOIN yard.users u ON sl.user_id=u.id
          LEFT JOIN yard.organizations o ON s.org_id=o.id
      WHERE
        u.ex_id::text=:userExId
          AND
        u.active=true
          AND
        sl.active=true
          AND
        s.active=true
          AND
        o.slug=:slug
    ),
    user_organization_subjects AS (
      SELECT
        s.id,
        s.ex_id,
        s.name,
        s.creator_id,
        s.org_id
      FROM
        yard.subjects s
          join user_org uo on s.org_id = uo.id
      WHERE
        s.active = true
    ),
    user_subjects_groups AS (
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
    admin_groups AS (
      SELECT
        g.id,
        g.ex_id,
        g.name,
        g.creator_id,
        g.org_id
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
        s.creator_id,
        s.org_id
      FROM
        yard.subjects s
          JOIN yard.subject_groups sg ON sg.subject_id=s.id
          JOIN admin_groups ag ON ag.id=sg.group_id
      WHERE
        s.active=true
          AND
        sg.active=true
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
              join user_org uo on g.org_id = uo.id
      where
          g.active=true
    ),
    target_groups AS (
      SELECT
        ug.*
      FROM
        (
          SELECT * FROM user_organization_groups uog
            UNION 
          SELECT * FROM user_subjects_groups usg
            UNION
          SELECT * FROM admin_groups ag
        ) ug
      WHERE
        1=
          CASE
            WHEN :tagType::text IS NULL THEN 1
            WHEN :tagType::text='subject' THEN 0
            WHEN :tag::text=ug.ex_id::text THEN 1
            ELSE 0
          END
    ),
    target_subjects AS (
      SELECT
        us.*
      FROM 
        (
          SELECT * FROM user_organization_subjects uos
            UNION 
          SELECT * FROM user_subjects us
            UNION
          SELECT * FROM admin_subjects ads
        ) us
      WHERE
        1=
          CASE
            WHEN :tagType::text IS NULL THEN 1
            WHEN :tagType::text='group' THEN 0
            WHEN :tag::text=us.ex_id::text THEN 1
            ELSE 0
          END
    )
    SELECT
      tm.ex_id,
      tm.original_file_size,
      tm.media_type,
      tm.file_type,
      tm.file_url,
      tm.created_at,
      tm.updated_at,
      TO_JSON(
        ARRAY_AGG(
          JSON_BUILD_OBJECT(
            'media_tag_ex_id', mtt.ex_id,
            'ex_id', COALESCE(g.ex_id, s.ex_id),
            'type', mtt.media_tag_type,
            'subject_ex_id', s.ex_id,
            'group_ex_id', g.ex_id,
            'name', COALESCE(g.name, s.name),
            'group_name', g.name,
            'subject_name', s.name
          )
        )
      ) tags
    FROM
      (
        SELECT
          distinct m.id as id,
          m.ex_id,
          m.original_file_size,
          m.media_type,
          m.file_type,
          m.file_url,
          m.created_at,
          m.updated_at
        FROM  yard.media_tags mt 
                JOIN yard.organizations o on mt.org_id=o.id
                JOIN yard.media m on mt.media_id=m.id
        WHERE
          o.slug=:slug
            AND
          o.active=true
            AND
          mt.active=true
            AND
          m.active=true
            AND
          (
            mt.subject_id in (SELECT id FROM target_subjects)
              OR
            mt.group_id in (SELECT id FROM target_groups)
          )
        GROUP BY 
          m.id,m.ex_id,
          m.original_file_size,
          m.media_type,
          m.file_type,
          m.file_url,
          m.created_at,
          m.updated_at
      ) tm
        JOIN yard.media_tags mtt on tm.id=mtt.media_id
        LEFT JOIN yard.groups g on mtt.group_id=g.id
        LEFT JOIN yard.subjects s on mtt.subject_id=s.id
    GROUP BY
      tm.id,
      tm.ex_id,
      tm.original_file_size,
      tm.media_type,
      tm.file_type,
      tm.file_url,
      tm.created_at,
      tm.updated_at
    ORDER BY tm.created_at DESC
  `,
    { slug, userExId, tag, tagType }
  )
  return media.map(({ tags, ...otherProps }) => ({
    ...otherProps,
    tags: JSON.parse(tags),
  }))
}

export default findUserMedia
