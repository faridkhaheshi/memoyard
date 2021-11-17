import { findUserByExId } from "../processors"

const handleGetTokenUserRequest = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
    } = req
    const user = await findUserByExId(userExId)
    delete user.id
    return res.json({ user })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetTokenUserRequest
