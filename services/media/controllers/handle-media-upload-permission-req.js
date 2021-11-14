import { createUploadUrl, allowMediaView } from "../processors"

const handleMediaUploadPermissionReq = async (req, res) => {
  try {
    // const uploadUrl = await createUploadUrl(req.body)
    // const viewUrl = allowMediaView(uploadUrl)
    // return res.json({ uploadUrl, viewUrl })
    console.log(req.body)
    return res.json({ done: true, uploadUrls: [] })
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "something went wrong" })
  }
}

export default handleMediaUploadPermissionReq
