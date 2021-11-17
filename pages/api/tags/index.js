import { protectApiRoute } from "../../../services/auth/controllers"
import { handleGetObservableTags } from "../../../services/tags/controllers"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleGetObservableTags)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
