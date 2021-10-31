import { createUploadUrl } from "../processors"

const handleMediaUploadPermissionReq = async (req, res) => {
  try {
    const url = await createUploadUrl(req.body)
    return res.json({ url })
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "something went wrong" })
  }
}

export default handleMediaUploadPermissionReq
