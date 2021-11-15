import { useState, useEffect } from "react"
import uploadFile from "./upload-file"

/*
  Values for status:
    'NO_UPLOAD_URL'
    'READY_TO_UPLOAD'
    'UPLOADING'
    'UPLOADED'
*/
const useMediaUploader = ({
  nativeFile,
  uploadInfo: { uploadUrl, viewUrl } = {},
}) => {
  const [status, setStatus] = useState("NO_UPLOAD_URL")
  const [progress, setProgress] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (uploadUrl && status === "NO_UPLOAD_URL") {
      setStatus("READY_TO_UPLOAD")
    }
  }, [uploadUrl, status])

  useEffect(() => {
    if (status === "READY_TO_UPLOAD") {
      setStatus("UPLOADING")
      uploadFile({ file: nativeFile, uploadUrl, onProgress: setProgress })
        .then(result => {
          result && setStatus("UPLOADED")
          console.log(viewUrl)
        })
        .catch(e => setErrorMessage(e.message || "upload failed"))
    }
  }, [
    status,
    setProgress,
    setErrorMessage,
    setStatus,
    nativeFile,
    uploadUrl,
    viewUrl,
  ])

  return { status, progress, errorMessage }
}

export default useMediaUploader
