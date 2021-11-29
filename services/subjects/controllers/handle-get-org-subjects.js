import { BadRequestError } from "restify-errors"
import findOrgSubjects from "../processors/find-org-subjects"

const handleGetOrgSubjects = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
      query: { orgSlug },
    } = req
    if (!orgSlug) throw new BadRequestError("some required info missing")
    const subjects = await findOrgSubjects({ userExId, orgSlug })
    return res.json({ done: true, subjects })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetOrgSubjects
