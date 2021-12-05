import { protectApiRoute } from "../../../services/auth/controllers"
import { handlePostOrganizationAdminReq } from "../../../services/organizationAdmins/controllers"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "POST":
      return protectApiRoute(handlePostOrganizationAdminReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
