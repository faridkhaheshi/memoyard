import { useCallback } from "react"
import MemoButton from "../../../../components/MemoButton"
import callApi from "../../../../utilities/call-api"

const UploadButton = ({ files, organization, tags }) => {
  const startUpload = useCallback(async () => {
    try {
      console.log(files)
      const { urls } = await callApi("/api/media/upload-permission", {
        method: "POST",
        body: {
          files: files.map(
            ({ name, mediaType, size, type, tags: fileTags, objectUrl }) => ({
              name,
              size,
              type,
              mediaType,
              objectUrl,
              tags: fileTags.map(tagId => tags.find(t => t.id === tagId)),
            })
          ),
          organization,
        },
      })
      console.log(urls)
    } catch (err) {
      console.error(err)
    } finally {
      console.log("done")
    }
  }, [files, organization])

  if (files.length === 0) return null
  return (
    <MemoButton large onClick={startUpload}>
      Upload
    </MemoButton>
  )
}

export default UploadButton
