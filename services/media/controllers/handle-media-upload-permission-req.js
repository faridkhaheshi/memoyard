import { getOrgInfoForAdmin } from "../../organizations/processors"
import { checkUserAccessToTags } from "../../tags/processors"
import { allowMediaView, createUploadUrls } from "../processors"

const handleMediaUploadPermissionReq = async (req, res) => {
  try {
    const {
      user,
      user: { ex_id: userExId },
      body: { organization, files },
    } = req
    const [theOrg] = await Promise.all([
      getOrgInfoForAdmin({ userExId, orgSlug: organization.slug }),
      checkUserAccessToTags({
        user,
        organization,
        tags: files.reduce((acc, file) => [...acc, ...file.tags], []),
      }),
    ])
    const uploadUrls = await createUploadUrls({ files, organization: theOrg })
    const viewUrls = uploadUrls.map(allowMediaView)
    return res.json({
      done: true,
      urls: uploadUrls.map((uploadUrl, index) => ({
        fileObjectUrl: files[index].objectUrl,
        uploadUrl,
        viewUrl: viewUrls[index],
      })),
    })
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "something went wrong" })
  }
}

export default handleMediaUploadPermissionReq
