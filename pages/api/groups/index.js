import { protectApiRoute } from "../../../services/auth/controllers"
import { handlePostOrgGroupReq } from "../../../services/groups/controllers"
import handleGetOrgGroupsReq from "../../../services/groups/controllers/handle-get-org-groups-req"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "GET":
      return protectApiRoute(handleGetOrgGroupsReq)(req, res)
    case "POST":
      return protectApiRoute(handlePostOrgGroupReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
