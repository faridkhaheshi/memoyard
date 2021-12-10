import { BadRequestError } from "restify-errors"
import { sendEmail } from "../../../adapters/ses"
import catchControllerErrors from "../../utilities/catch-controller-errors"
import generateTicketForUser from "../processors/generate-ticket-for-user"
import config from "../../../config"

const handlePostTicketReq = async (req, res) => {
  const {
    body: { email },
  } = req
  if (!email) throw new BadRequestError("Some required fields are missing")
  const ticket = await generateTicketForUser({ email })
  if (config.env === "development")
    console.log(`ticket code: ${ticket.code} for email ${email}`)
  await sendEmail({
    to: email,
    text: `Your memoyard code is: ${ticket.code}`,
    html: `<p>Your memoyard code is:</p><p>${ticket.code}</p>`,
    subject: `Memoyard: use code ${ticket.code} to log in`,
  })
  return res.json({ ok: true })
}

export default catchControllerErrors(handlePostTicketReq)
