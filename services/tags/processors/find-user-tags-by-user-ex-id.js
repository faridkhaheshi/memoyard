import db from "../../../adapters/db"

const findUserTagsByUserExId = async ({ userExId, slug }) => {
  const { records: tags } = await db.query(
    `
    SELECT
      g.name as name,
      'group' as type,
      g.ex_id as group_ex_id,
      null as subject_ex_id
    FROM
      yard.groups g
        JOIN yard.organizations o ON g.org_id=o.id
        JOIN yard.users u ON o.creator_id=u.id
    WHERE
      u.ex_id::text=:userExId
        AND
      o.slug=:slug
        AND
      g.active=true
        AND
      o.active=true
        AND
      u.active=true

      UNION ALL

      SELECT
        s.name as name,
        'subject' as type,
        null as group_ex_id,
        s.ex_id as subject_ex_id
      FROM
        yard.subjects s
          JOIN yard.organizations o ON s.org_id=o.id
          JOIN yard.users u ON o.creator_id=u.id
        
      WHERE
        u.ex_id::text=:userExId
          AND
        o.slug=:slug
          AND
        s.active=true
          AND
        o.active=true
          AND
        u.active=true
  `,
    { userExId, slug }
  )
  return tags
}

export default findUserTagsByUserExId
