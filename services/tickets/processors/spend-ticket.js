import moment from "moment"
import { UnauthorizedError } from "restify-errors"
import db from "../../../adapters/db"

const spendTicket = async ({ userEmail, ticket }) => {
  const now = moment().unix()
  const { records: users } = await db.query(
    `
      UPDATE yard.tickets t
        SET active=false
      FROM
        yard.users u
      WHERE
        t.user_id = u.id
          AND
        u.email=:userEmail
          AND
        u.active=true
          AND
        t.active=true
          AND
        t.expires_at > :now
      RETURNING
        u.ex_id,
        u.first_name,
        u.last_name,
        u.email,
        u.mobile,
        u.city,
        u.country,
        u.province,
        u.created_at,
        u.updated_at
  `,
    { userEmail, ticket, now, ticket }
  )

  if (users.length === 0) throw new UnauthorizedError("Ticket was invalid")
  return users[0]
}

export default spendTicket
