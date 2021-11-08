import db from "../../../adapters/db"

const findOrganizationBySlug = async slug => {
  try {
    const { records: organizations } = await db.query(
      `
      SELECT
        o.ex_id,
        o.name,
        o.slug,
        o.active,
        o.created_at,
        o.updated_at,
        u.ex_id AS creator_ex_id
      FROM
        yard.organizations o
          JOIN yard.users u
            ON o.creator_id=u.id
        WHERE
          o.slug=:slug
            AND
          o.active=true
      LIMIT 1
    `,
      { slug }
    )
    if (organizations.length === 0) return null
    return organizations[0]
  } catch (err) {
    return null
  }
}

export default findOrganizationBySlug
