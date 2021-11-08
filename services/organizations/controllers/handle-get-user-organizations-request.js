import findUserOrganizationsByUserExId from "../processors/find-user-organizations-by-user-ex-id"

const handleGetUserOrganizations = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
    } = req
    const organizations = await findUserOrganizationsByUserExId(userExId)
    return res.json({ organizations })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetUserOrganizations
