import { protectApiRoute } from "../../../services/auth/controllers"
import { handleGetTokenUserRequest } from "../../../services/users/controllers"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      return protectApiRoute(handleGetTokenUserRequest)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
