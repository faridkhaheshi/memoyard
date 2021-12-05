import { BadRequestError } from "restify-errors"
import addListenerToSubjectByContactInfo from "../processors/add-listener-to-subject-by-contact-info"

const handlePostSubjectListenerReq = async (req, res) => {
  try {
    const {
      body: { orgSlug, subjectExId, subjectListenerInfo },
      user: { ex_id: userExId },
    } = req
    if (!orgSlug || !subjectExId || !subjectListenerInfo)
      throw new BadRequestError("some required fields missing")

    const listener = await addListenerToSubjectByContactInfo({
      userExId,
      subjectExId,
      orgSlug,
      subjectListenerInfo,
    })
    return res.json({ ok: true, listener })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handlePostSubjectListenerReq
