import handleMediaUploadPermissionReq from "../../../services/media/controllers/handle-media-upload-permission-req"

export default function handler(req, res) {
  const { method } = req

  switch (method) {
    case "POST":
      return handleMediaUploadPermissionReq(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
