import db from "../../../adapters/db"

const findUserByEmail = async normalizedEmail => {
  try {
    const { records } = await db.query(
      `SELECT 
          ex_id,
          first_name,
          last_name,
          email,
          mobile,
          address,
          address_2,
          address_3,
          postal_code,
          city,
          province,
          country,
          user_type,
          active,
          created_at,
          updated_at
      FROM
        yard.users
      WHERE 
        email=:normalizedEmail 
        AND
        active=true
      LIMIT 1
      `,
      { normalizedEmail }
    )
    if (records.length === 0) return null
    return records[0]
  } catch (err) {
    return null
  }
}

export default findUserByEmail
