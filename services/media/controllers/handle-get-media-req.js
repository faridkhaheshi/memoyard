import { allowMediaView, findUserMedia } from "../processors"

const handleGetMediaReq = async (req, res) => {
  try {
    const {
      user: { ex_id: userExId },
      query: { slug },
    } = req
    const media = await findUserMedia({ userExId, slug })
    return res.json({
      media: media.map(({ file_url, ...rest }) => ({
        ...rest,
        view_url: allowMediaView(file_url),
      })),
    })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetMediaReq
