import { BadRequestError } from "restify-errors"
import { spendTicket } from "../../tickets/processors"

const checkLoginInfo = async ({ email, password, ticket }) => {
  if (!email || (!password && !ticket))
    throw new BadRequestError("some required info are missing")
  const normalizedEmail = email.toLowerCase()

  const user = await spendTicket({ userEmail: normalizedEmail, ticket })
  return user
}

export default checkLoginInfo
