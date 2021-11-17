import { findUserObservableTags } from "../processors"

const handleGetObservableTags = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
    } = req

    // For now let's just return the tags for the organization creator
    // TODO: list tags based on observability and not just for the org owner
    const tags = await findUserObservableTags({ userExId })

    return res.json({ tags })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetObservableTags
