import { BadRequestError } from "restify-errors"
import findOrgGroups from "../processors/find-org-groups"

const handleGetOrgGroupsReq = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
      query: { orgSlug },
    } = req
    if (!orgSlug) throw new BadRequestError("some required info missing")
    const groups = await findOrgGroups({ userExId, orgSlug })
    return res.json({ done: true, groups })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetOrgGroupsReq
