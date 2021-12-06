import { protectApiRoute } from "../../../../services/auth/controllers"
import handleUpdateOrganizationAdminReq from "../../../../services/organization-admins/controllers/handle-update-organization-admin-req"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "PUT":
      return protectApiRoute(handleUpdateOrganizationAdminReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
