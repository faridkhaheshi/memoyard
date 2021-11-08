import db from "../../../adapters/db"

const findUserByExId = async exId => {
  try {
    const { records } = await db.query(
      `
      SELECT
        id,
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
        ex_id::text=:exId
          AND
        active=true
      LIMIT 1
    `,
      { exId }
    )

    const [user] = records
    return user
  } catch (err) {
    return null
  }
}

export default findUserByExId
