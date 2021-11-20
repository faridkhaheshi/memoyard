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
        (
          u.ex_id::text=:userExId
            OR
          o.id IN (select id FROM user_org)
        )
          AND
        u.active=true
          AND
        sl.active=true
          AND
        s.active=true
          AND
        o.slug=:slug
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
          JOIN yard.organizations o ON g.org_id=o.id
      WHERE
        (
          g.org_id IN (SELECT id FROM user_org)
            OR
          sg.group_id IS NOT NULL
        )
          AND
        g.active=true
          AND
        sg.active=true
          AND
        o.active=true
          AND
        o.slug=:slug
    ),
    target_groups AS (
      SELECT
        ug.*
      FROM
        user_groups ug
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
        user_subjects us
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
      om.ex_id,
        om.original_file_size,
        om.media_type,
        om.file_type,
        om.file_url,
        om.created_at,
        om.updated_at
    FROM
      (
            SELECT DISTINCT m.id
            FROM	yard.media_tags mt 
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
            ) am JOIN yard.media om ON am.id=om.id
          ORDER BY om.created_at DESC
  `,
    { slug, userExId, tag, tagType }
  )
  return media
}

export default findUserMedia
