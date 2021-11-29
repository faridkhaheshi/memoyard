import { protectApiRoute } from "../../../services/auth/controllers"
import { handleGetOrgSubjects } from "../../../services/subjects/controllers"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      return protectApiRoute(handleGetOrgSubjects)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
