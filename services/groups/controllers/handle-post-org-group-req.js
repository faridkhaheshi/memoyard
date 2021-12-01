import { PaymentRequiredError } from "restify-errors"
import findOrgGroups from "../processors/find-org-groups"
import addGroupToOrg from "../processors/add-group-to-org"
import config from "../../../config"

const {
  panel: { maxGroupsPerOrg },
} = config

const handlePostOrgGroupReq = async (req, res) => {
  try {
    const {
      body: { orgSlug, groupInfo },
      user: { ex_id: userExId },
    } = req
    const orgGroups = await findOrgGroups({ userExId, orgSlug })
    if (orgGroups.length >= maxGroupsPerOrg)
      throw new PaymentRequiredError("Max groups per organization reached")
    const group = await addGroupToOrg({ orgSlug, groupInfo, userExId })
    return res.json({ done: true, group })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handlePostOrgGroupReq
