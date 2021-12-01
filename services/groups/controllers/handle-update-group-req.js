import updateOrgGroup from "../processors/update-org-group"

const handleUpdateGroupReq = async (req, res) => {
  try {
    const {
      query: { groupExId },
      user: { ex_id: userExId },
      body: update,
    } = req
    const group = await updateOrgGroup({ groupExId, userExId, update })
    return res.json({ done: true, group })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleUpdateGroupReq
