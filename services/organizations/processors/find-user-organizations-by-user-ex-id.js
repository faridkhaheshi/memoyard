import db from "../../../adapters/db"

const findUserOrganizationsByUserExId = async userExId => {
  const { records: organizations } = await db.query(
    `
    SELECT 
      o.*
    FROM
      yard.organizations AS o 
        JOIN 
          yard.users AS u ON o.creator_id=u.id
        WHERE
          u.ex_id::text=:userExId
    ORDER BY o.updated_at DESC
  `,
    { userExId }
  )
  return organizations
}

export default findUserOrganizationsByUserExId
