import { protectApiRoute } from "../../../services/auth/controllers"
import {
  handleGetOrganizationAdminsReq,
  handlePostOrganizationAdminReq,
} from "../../../services/organization-admins/controllers"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleGetOrganizationAdminsReq)(req, res)
    case "POST":
      return protectApiRoute(handlePostOrganizationAdminReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
