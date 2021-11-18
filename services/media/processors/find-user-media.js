import db from "../../../adapters/db"

const findUserMedia = async ({ userExId, slug }) => {
  const { records: media } = await db.query(
    `
    WITH user_orgs AS (
      SELECT
        o.id,
        o.ex_id,
        o.slug,
      o.name
      FROM
        yard.organizations o
          JOIN yard.users u on creator_id = u.id
      WHERE
        u.ex_id::text=:userExId
          AND
        u.active = true
          AND
        o.active = true
          AND
        o.slug=:slug
    ),
    user_subjects as (
      SELECT
        s.id,
        s.ex_id,
        s.name,
      s.creator_id,
      s.org_id
      FROM
        yard.subjects s
          JOIN yard.subject_listeners sl on sl.subject_id=s.id
          JOIN yard.users u on sl.user_id=u.id
          JOIN yard.organizations o on s.org_id=o.id
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
    user_groups AS (
      SELECT
        g.id,
        g.ex_id,
      g.name,
        g.creator_id,
        g.org_id
      FROM
        yard.groups g
          JOIN yard.subject_groups sg on g.id=sg.group_id
          JOIN user_subjects us on sg.subject_id=us.id
          JOIN yard.organizations o on g.org_id=o.id
      WHERE
        g.active=true
          AND
        sg.active=true
          AND
        o.active=true
          AND
        o.slug=:slug
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
              mt.subject_id in (SELECT id FROM user_subjects)
                OR
              mt.group_id in (SELECT id FROM user_groups)
                OR
              mt.org_id in (SELECT id FROM user_orgs)
            )
        ) am JOIN yard.media om ON am.id=om.id
      ORDER BY om.created_at DESC
  `,
    { slug, userExId }
  )
  return media
}

export default findUserMedia
