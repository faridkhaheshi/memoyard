import { protectApiRoute } from "../../../services/auth/controllers"
import handlePostSubjectListenerReq from "../../../services/subject_listeners/controllers/handle-post-subject-listener-req"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "POST":
      return protectApiRoute(handlePostSubjectListenerReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
