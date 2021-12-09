import { BadRequestError } from "restify-errors"
import catchControllerErrors from "../../utilities/catch-controller-errors"
import generateTicketForUser from "../processors/generate-ticket-for-user"

const handlePostTicketReq = async (req, res) => {
  const {
    body: { email },
  } = req
  if (!email) throw new BadRequestError("Some required fields are missing")
  const ticket = await generateTicketForUser({ email })
  return res.json({ ok: true, ticket })
}

export default catchControllerErrors(handlePostTicketReq)
