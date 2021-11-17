import { findUserOrganizationsByUserExId } from "../processors"

const handleGetUserOrganizations = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
      query,
    } = req
    const organizations = await findUserOrganizationsByUserExId(userExId, query)
    return res.json({ organizations })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetUserOrganizations
