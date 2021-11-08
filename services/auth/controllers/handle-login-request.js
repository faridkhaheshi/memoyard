import { checkLoginInfo, logInUser } from "../processors"

const handleLoginRequest = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req
    const user = await checkLoginInfo({ email, password })
    delete user.id
    const token = await logInUser(user)
    return res.json({ token })
  } catch (err) {
    return res
      .status(500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleLoginRequest
