import { handleGetUserOrganizations } from "../../../services/organizations/controllers"
import { protectApiRoute } from "../../../services/auth/controllers"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      return protectApiRoute(handleGetUserOrganizations)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
