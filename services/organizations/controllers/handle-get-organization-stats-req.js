import { getOrganizationStatsBySlug } from "../processors"

const handleGetOrganizationStatsReq = async (req, res) => {
  try {
    const {
      query: { slug: orgSlug },
      user: { ex_id: userExId },
    } = req
    const organizationStats = await getOrganizationStatsBySlug({
      orgSlug,
      userExId,
    })
    return res.json({ organizationStats })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetOrganizationStatsReq
