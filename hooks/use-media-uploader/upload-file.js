const uploadFile = ({ file, uploadUrl, onProgress = () => {} }) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const formData = new FormData()
    formData.append("file", file)
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
    xhr.open("PUT", uploadUrl, true)
    xhr.setRequestHeader("Content-Type", "multipart/form-data")
    xhr.send(formData)
  })

export default uploadFile
