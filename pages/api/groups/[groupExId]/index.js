import { protectApiRoute } from "../../../../services/auth/controllers"
import handleUpdateGroupReq from "../../../../services/groups/controllers/handle-update-group-req"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "PUT":
      return protectApiRoute(handleUpdateGroupReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
