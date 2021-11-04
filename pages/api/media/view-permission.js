import handleMediaViewPermissionReq from "../../../services/media/controllers/handle-media-view-permission-req"

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case "GET":
      return handleMediaViewPermissionReq(req, res)
    default:
      return res.status(405).send("The method is not supported")
  }
}
