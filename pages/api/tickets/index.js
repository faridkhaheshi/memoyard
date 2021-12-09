import handlePostTicketReq from "../../../services/tickets/controllers/handle-post-ticket-req"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "POST":
      return handlePostTicketReq(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
