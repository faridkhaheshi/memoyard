import { checkUserAccessToOrganization } from "../../organizations/processors"
import { checkUserAccessToTags } from "../../tags/processors"
import { addMediaWithTags } from "../processors"

const handlePostMediaReq = async (req, res) => {
  try {
    const {
      body: {
        name: originalFileName,
        size: originalFilelSize,
        mediaType,
        fileType,
        url: fileUrl,
        organization,
        tags,
      },
      user,
    } = req
    const [theOrg, internalTags] = await Promise.all([
      checkUserAccessToOrganization({ user, organization }),
      checkUserAccessToTags({ user, organization, tags }),
    ])

    const media = await addMediaWithTags({
      media: {
        originalFileName,
        originalFilelSize,
        mediaType,
        fileType,
        fileUrl,
        userExId: user.ex_id,
        orgExId: theOrg.ex_id,
      },
      tags: internalTags,
    })

    delete media.id
    return res.json({
      done: true,
      media,
    })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handlePostMediaReq
