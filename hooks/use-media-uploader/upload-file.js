import axios from "axios"

const uploadFile = ({ file, uploadUrl, onProgress = () => {} }) => {
  return new Promise((resolve, reject) => {
    xhr.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
        onProgress(event.loaded / event.total)
      }
    })
    xhr.addEventListener("progress", event => {
      if (event.lengthComputable) {
        onProgress(event.loaded / event.total)
      }
    })
    xhr.addEventListener("loadstart", () => onProgress(0))
    xhr.addEventListener("loadend", () => {
      resolve(xhr.readyState === 4 && xhr.status === 200)
    })
    xhr.addEventListener("error", reject)
    xhr.addEventListener("abort", reject)
    xhr.open("PUT", uploadUrl)
    xhr.setRequestHeader("Content-Type", "multipart/form-data")
    xhr.send(file)
  })
}

export default uploadFile
