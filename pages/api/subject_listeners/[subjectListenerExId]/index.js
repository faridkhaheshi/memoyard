import { protectApiRoute } from "../../../../services/auth/controllers"
import { handleUpdateSubjectListenerReq } from "../../../../services/subject_listeners/controllers"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "PUT":
      return protectApiRoute(handleUpdateSubjectListenerReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
