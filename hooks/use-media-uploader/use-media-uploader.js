import { useState, useEffect } from "react"
import uploadFile from "./upload-file"
import callApi from "../../utilities/call-api"
import cleanMediaUrl from "../../utilities/urls/clean-media-url"

/*
  Values for status:
    'NO_UPLOAD_URL'
    'READY_TO_UPLOAD'
    'UPLOADING'
    'UPLOADED'
*/
const useMediaUploader = (file, dispatch, organization, tags) => {
  const [status, setStatus] = useState("NO_UPLOAD_URL")
  const [progress, setProgress] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const {
    objectUrl,
    nativeFile,
    uploadInfo: { uploadUrl, viewUrl } = {},
  } = file

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
        .then(result =>
          callApi("/api/media", {
            method: "POST",
            body: {
              name: file.name,
              size: file.size,
              organization: { slug: organization.slug },
              mediaType: file.mediaType,
              fileType: file.type,
              url: cleanMediaUrl(uploadUrl),
              tags: file.tags.map(tagId => tags.find(t => t.id === tagId)),
            },
          })
        )
        .then(result => {
          console.log(result)
          setStatus("UPLOADED")
          dispatch({
            type: "UPDATE_UPLOAD_STATUS",
            payload: { fileObjectUrl: objectUrl, status: "UPLOADED" },
          })
        })
        .catch(e => {
          console.error(e)
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
    file,
    organization.ex_id,
    tags,
  ])

  return { status, progress, errorMessage }
}

export default useMediaUploader
