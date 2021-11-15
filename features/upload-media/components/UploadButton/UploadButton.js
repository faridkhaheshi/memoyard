import { useCallback, useState } from "react"
import MemoButton from "../../../../components/MemoButton"
import callApi from "../../../../utilities/call-api"

const UploadButton = ({ files, organization, tags, dispatch }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const startUpload = useCallback(async () => {
    try {
      setIsProcessing(true)
      setErrorMessage(null)
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
      dispatch({ type: "ADD_UPLOAD_URLS", payload: urls })
    } catch (err) {
      setErrorMessage(err.message || "Request Failed")
    } finally {
      setIsProcessing(false)
    }
  }, [files, tags, organization, setIsProcessing, setErrorMessage, dispatch])

  if (files.length === 0) return null
  return (
    <MemoButton
      large
      withMargins
      onClick={startUpload}
      disabled={isProcessing}
      error={errorMessage}
    >
      Upload
    </MemoButton>
  )
}

export default UploadButton
