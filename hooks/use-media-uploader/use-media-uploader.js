import { useState, useEffect } from "react"
import uploadFile from "./upload-file"

/*
  Values for status:
    'NO_UPLOAD_URL'
    'READY_TO_UPLOAD'
    'UPLOADING'
    'UPLOADED'
*/
const useMediaUploader = (
  { objectUrl, nativeFile, uploadInfo: { uploadUrl, viewUrl } = {} },
  dispatch
) => {
  const [status, setStatus] = useState("NO_UPLOAD_URL")
  const [progress, setProgress] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (uploadUrl && status === "NO_UPLOAD_URL") {
      setStatus("READY_TO_UPLOAD")
      dispatch({
        type: "UPDATE_UPLOAD_STATUS",
        payload: { fileObjectUrl: objectUrl, status: "READY_TO_UPLOAD" },
      })
    }
  }, [uploadUrl, status, dispatch, objectUrl])

  useEffect(() => {
    if (status === "READY_TO_UPLOAD") {
      setStatus("UPLOADING")
      dispatch({
        type: "UPDATE_UPLOAD_STATUS",
        payload: { fileObjectUrl: objectUrl, status: "UPLOADING" },
      })
      uploadFile({ file: nativeFile, uploadUrl, onProgress: setProgress })
        .then(result => {
          if (result) {
            setStatus("UPLOADED")
            dispatch({
              type: "UPDATE_UPLOAD_STATUS",
              payload: { fileObjectUrl: objectUrl, status: "UPLOADED" },
            })
          }
        })
        .catch(e => {
          setErrorMessage(e.message || "upload failed")
          dispatch({
            type: "UPDATE_UPLOAD_STATUS",
            payload: { fileObjectUrl: objectUrl, status: "FAILED" },
          })
        })
    }
  }, [
    status,
    setProgress,
    setErrorMessage,
    setStatus,
    nativeFile,
    uploadUrl,
    viewUrl,
    objectUrl,
    dispatch,
  ])

  return { status, progress, errorMessage }
}

export default useMediaUploader
