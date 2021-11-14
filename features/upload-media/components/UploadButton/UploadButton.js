import MemoButton from "../../../../components/MemoButton"
import callApi from "../../../../utilities/call-api"

const UploadButton = ({ files, organization, tags }) => {
  const startUpload = async () => {
    const { uploadUrls } = await callApi("/api/media/upload-permission", {
      method: "POST",
      body: {
        files: files.map(({ name, mediaType, size, type, tags: fileTags }) => ({
          name,
          size,
          type,
          mediaType,
          tags: fileTags.map(tagId => tags.find(t => t.id === tagId)),
        })),
        organization,
      },
    })
    console.log(uploadUrls)
  }

  if (files.length === 0) return null
  return (
    <MemoButton large onClick={startUpload}>
      Upload
    </MemoButton>
  )
}

export default UploadButton
