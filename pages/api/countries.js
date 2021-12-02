import handleGetCountriesReq from "../../services/countries/controllers/handle-get-countries-req"
import protectApiRoute from "../../services/auth/controllers/protect-api-route"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return protectApiRoute(handleGetCountriesReq)(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
