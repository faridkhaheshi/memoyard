import { findUserObservableTags } from "../processors"

const handleGetObservableTags = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
      query: { slug },
    } = req

    const tags = await findUserObservableTags({ userExId, slug })

    return res.json({ tags })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetObservableTags
