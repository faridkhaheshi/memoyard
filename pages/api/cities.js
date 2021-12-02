import protectApiRoute from "../../services/auth/controllers/protect-api-route"
import handleGetCitiesReq from "../../services/cities/controllers/handle-get-cities-req"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleGetCitiesReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
