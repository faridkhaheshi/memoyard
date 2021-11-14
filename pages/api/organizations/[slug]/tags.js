import { protectApiRoute } from "../../../../services/auth/controllers"
import { handleGetUserTags } from "../../../../services/tags/controllers"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleGetUserTags)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
