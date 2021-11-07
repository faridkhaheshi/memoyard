import {
  UnauthorizedError,
  BadRequestError,
  NotFoundError,
} from "restify-errors"
import { findUserByEmail } from "../../users/processors"

const checkLoginInfo = async ({ email, password }) => {
  if (!email || !password)
    throw new BadRequestError("some required info are missing")
  const normalizedEmail = email.toLowerCase()
  if (normalizedEmail !== "farid.khaheshi@gmail.com")
    throw new BadRequestError(
      "User is not supported yet. Thanks for your interest"
    )
  if (password !== process.env.FIRST_USER_PASSWORD)
    throw new UnauthorizedError("Password is wrong")
  const user = await findUserByEmail(normalizedEmail)
  if (!user) throw new NotFoundError("User not found")
  return user
}

export default checkLoginInfo
