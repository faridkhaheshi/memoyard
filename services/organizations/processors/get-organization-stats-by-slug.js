import db from "../../../adapters/db"

const getOrganizationStatsBySlug = async ({ orgSlug, userExId }) => {
  const { records } = await db.query(
    `
    SELECT
      (
        SELECT COUNT(oa.id)
        FROM yard.organization_admins oa
        WHERE oa.org_id=o.id AND oa.active=true
      ) as admins,
      (
        SELECT COUNT(s.id)
        FROM yard.subjects s
        WHERE s.org_id=o.id AND s.active=true
      ) as subjects,
      (
        SELECT COUNT(sl.id)
        FROM yard.subject_listeners sl JOIN yard.subjects s ON sl.subject_id=s.id
        WHERE 
          sl.org_id=o.id
            AND
          sl.active=true
            AND
          s.active=true
      ) as subject_listeners,
      (
        SELECT COUNT(g.id)
        FROM yard.groups g
        WHERE g.org_id=o.id AND g.active=true
      ) as groups
    FROM
      yard.organizations o JOIN yard.users u ON o.creator_id=u.id
    WHERE
      u.ex_id::text=:userExId
        AND
      o.slug=:orgSlug
        AND
      o.active=true
        AND
      u.active=true
    LIMIT 1
  `,
    { orgSlug, userExId }
  )

  return records[0]
}

export default getOrganizationStatsBySlug
