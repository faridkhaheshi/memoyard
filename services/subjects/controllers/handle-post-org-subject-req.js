import { PaymentRequiredError } from "restify-errors"
import findOrgSubjects from "../processors/find-org-subjects"
import addSubjectToGroup from "../processors/add-subject-to-group"
import config from "../../../config"

const {
  panel: { maxSubjectsPerOrg },
} = config

const handlePostOrgSubjectReq = async (req, res) => {
  try {
    const {
      body: { orgSlug, subjectInfo, groupExId },
      user: { ex_id: userExId },
    } = req
    const orgSubjects = await findOrgSubjects({ userExId, orgSlug })
    if (orgSubjects.length >= maxSubjectsPerOrg)
      throw new PaymentRequiredError(
        "Maximum subjects per organization reached"
      )

    const subject = await addSubjectToGroup({
      orgSlug,
      subjectInfo,
      groupExId,
      userExId,
    })
    delete subject.id

    return res.json({ done: true, subject })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handlePostOrgSubjectReq
