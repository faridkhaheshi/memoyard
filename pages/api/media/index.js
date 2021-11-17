import { protectApiRoute } from "../../../services/auth/controllers"
import { handlePostMediaReq } from "../../../services/media/controllers"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "POST":
      return protectApiRoute(handlePostMediaReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
