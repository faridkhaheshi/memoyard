import { BadRequestError } from "restify-errors"
import { findOrgAdminsWithGroups } from "../processors"

const handleGetOrganizationAdminsReq = async (req, res) => {
  try {
    const {
      query: { orgSlug },
      user: { ex_id: userExId },
    } = req
    if (!orgSlug) throw new BadRequestError("some required fields are missing")

    const organizationAdmins = await findOrgAdminsWithGroups({
      orgSlug,
      userExId,
    })

    return res.json({ organizationAdmins })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetOrganizationAdminsReq
