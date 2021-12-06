import updateOrgAdmin from "../processors/update-org-admin"

const handleUpdateOrganizationAdminReq = async (req, res) => {
  try {
    const {
      query: { organizationAdminExId },
      user: { ex_id: userExId },
      body: { first_name, last_name, active },
    } = req
    const organizationAdmin = await updateOrgAdmin({
      organizationAdminExId,
      update: { first_name, last_name, active },
      userExId,
    })
    return res.json({ done: true, organizationAdmin })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleUpdateOrganizationAdminReq
