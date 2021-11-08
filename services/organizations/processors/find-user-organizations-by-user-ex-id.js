import db from "../../../adapters/db"

const findUserOrganizationsByUserExId = async (userExId, query = {}) => {
  const { slug } = query
  const { records: organizations } = await db.query(
    `
    SELECT 
      o.ex_id,
      o.name,
      o.slug,
      o.active,
      o.created_at,
      o.updated_at,
      u.ex_id as creator_ex_id
    FROM
      yard.organizations AS o 
        JOIN 
          yard.users AS u ON o.creator_id=u.id
        WHERE
          u.ex_id::text=:userExId
            AND 
          u.active=true
            AND
          o.active=true
            AND
          ${slug ? "slug=:slug" : "1=1"}
    ORDER BY o.updated_at DESC
  `,
    { userExId, slug }
  )
  return organizations
}

export default findUserOrganizationsByUserExId
