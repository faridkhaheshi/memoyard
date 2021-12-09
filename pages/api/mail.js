import { sendEmail } from "../../adapters/ses"

export default async function handler(req, res) {
  try {
    // const result = await sendEmail({
    //   to: "services.farid.khaheshi@gmail.com",
    //   text: "Hello Farid",
    //   subject: "Welcome to memoyard!",
    // })
    return res.json({ done: true })
  } catch (err) {
    res.json({ errMessage: err.message || "failed" })
  }
}
