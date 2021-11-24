import { protectApiRoute } from "../../../services/auth/controllers"
import { handleHasuraAuthReq } from "../../../services/hasura/controllers"

export default function hadler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleHasuraAuthReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
