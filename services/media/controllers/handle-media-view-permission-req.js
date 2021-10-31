import { allowMediaView } from "../processors"

const handleMediaViewPermissionReq = async (req, res) => {
  try {
    const {
      query: { mediaUrl },
    } = req
    if (!mediaUrl) return res.status(400).json({ error: "no url provided" })
    return res.json({ url: allowMediaView(mediaUrl) })
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "something went wrong" })
  }
}

export default handleMediaViewPermissionReq
