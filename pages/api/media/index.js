import { protectApiRoute } from "../../../services/auth/controllers"
import {
  handleGetMediaReq,
  handlePostMediaReq,
} from "../../../services/media/controllers"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      return protectApiRoute(handleGetMediaReq)(req, res)
    case "POST":
      return protectApiRoute(handlePostMediaReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
