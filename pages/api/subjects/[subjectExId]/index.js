import { protectApiRoute } from "../../../../services/auth/controllers"
import { handleUpdateSubjectReq } from "../../../../services/subjects/controllers"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "PUT":
      return protectApiRoute(handleUpdateSubjectReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
