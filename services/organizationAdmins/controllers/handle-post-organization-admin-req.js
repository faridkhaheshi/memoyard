import { BadRequestError } from "restify-errors"
import { addAdminToOrganizationGroupsByContactInfo } from "../processors"

const handlePostOrganizationAdminReq = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
      body: { orgSlug, adminInfo, groups },
    } = req

    if (!orgSlug || !adminInfo)
      throw new BadRequestError("some required fields are missing")

    const organizationAdmin = await addAdminToOrganizationGroupsByContactInfo({
      userExId,
      orgSlug,
      groups,
      adminInfo,
    })
    return res.json({
      done: true,
      organizationAdmin,
    })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handlePostOrganizationAdminReq
