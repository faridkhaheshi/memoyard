import moment from "moment"
import generateRandomCode from "../utilities/generate-random-code"
import db from "../../../adapters/db"
import config from "../../../config"

const {
  demo: { demoAccounts, demoAccountsTicket },
} = config

const EXPIRE_IN_HOURS = 2

const generateTicketForUser = async ({ email }) => {
  const code = demoAccounts.includes(email)
    ? demoAccountsTicket
    : generateRandomCode({ length: 6 })
  const expiresAt = moment().add(EXPIRE_IN_HOURS, "hours").unix()
  const { records } = await db.query(
    `
    INSERT INTO
      yard.tickets (
        user_id,
        code,
        expires_at
      )
    VALUES (
      (SELECT id FROM yard.users u WHERE u.email=:email),
      :code,
      :expiresAt
    )
    ON CONFLICT (user_id)
      DO UPDATE SET 
        active=EXCLUDED.active,
        code=EXCLUDED.code,
        expires_at=EXCLUDED.expires_at
    RETURNING
      ex_id,
      code,
      expires_at,
      created_at,
      updated_at
  `,
    { email, code, expiresAt }
  )
  return records[0]
}

export default generateTicketForUser
