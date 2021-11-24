import { NotAuthorizedError } from "restify-errors"
import { findUserByExId } from "../../users/processors"
import generateHasuraToken from "../processors/generate-hasura-token"

const handleHasuraAuthReq = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
    } = req
    const user = await findUserByExId(userExId)
    if (!user || user.user_type !== "superadmin")
      throw new NotAuthorizedError("not authorized")
    const token = await generateHasuraToken()
    return res.json({ token })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleHasuraAuthReq
