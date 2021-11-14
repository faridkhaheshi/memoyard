import findUserTagsByUserExId from "../processors/find-user-tags-by-user-ex-id"

const handleGetUserTags = async (req, res) => {
  try {
    const {
      query: { slug },
      user: { ex_id: userExId },
    } = req
    const tags = await findUserTagsByUserExId({ userExId, slug })
    return res.json({ tags })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetUserTags
