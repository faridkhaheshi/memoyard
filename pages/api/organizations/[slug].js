import { handleGetOrganizationBySlugRequest } from "../../../services/organizations/controllers"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return handleGetOrganizationBySlugRequest(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
