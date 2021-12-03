import protectApiRoute from "../../services/auth/controllers/protect-api-route"
import handleGetStatesReq from "../../services/states/controllers/handle-get-states-req"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleGetStatesReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
