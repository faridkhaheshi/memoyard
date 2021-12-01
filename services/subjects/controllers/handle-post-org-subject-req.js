import { PaymentRequiredError } from "restify-errors"
import findOrgSubjects from "../processors/find-org-subjects"
import addSubjectToOrg from "../processors/add-subject-to-org"
import config from "../../../config"

const {
  panel: { maxSubjectsPerOrg },
} = config

const handlePostOrgSubjectReq = async (req, res) => {
  try {
    const {
      body: { orgSlug, subjectInfo },
      user: { ex_id: userExId },
    } = req
    const orgSubjects = await findOrgSubjects({ userExId, orgSlug })
    if (orgSubjects.length >= maxSubjectsPerOrg)
      throw new PaymentRequiredError("Max subjects per organization reached")
    const subject = await addSubjectToOrg({ orgSlug, subjectInfo, userExId })
    return res.json({ done: true, subject })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handlePostOrgSubjectReq
