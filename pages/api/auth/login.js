import handleLoginRequest from "../../../services/auth/controllers/handle-login-request"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "POST":
      return handleLoginRequest(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
