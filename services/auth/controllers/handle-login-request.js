import catchControllerErrors from "../../utilities/catch-controller-errors"
import { checkLoginInfo, logInUser } from "../processors"

const handleLoginRequest = async (req, res) => {
  const {
    body: { email, password, ticket },
  } = req
  const user = await checkLoginInfo({ email, password, ticket })
  const token = await logInUser(user)
  return res.json({ token })
}

export default catchControllerErrors(handleLoginRequest)
