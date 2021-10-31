function MediaUploader() {
  const handleChange = async e => {
    try {
      console.log(e.target.files)
      if (e.target.files.length <= 0) return
      const [file] = e.target.files
      const serverResponse = await fetch("/api/media/upload-permission", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
        }),
      })
      const { uploadUrl, viewUrl } = await serverResponse.json()
      console.log(uploadUrl)
      console.log(viewUrl)
      await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      })
      console.log("uploaded. view here:")
      console.log(viewUrl)
    } catch (err) {
      console.error(err)
    }
  }

  return <input type="file" onChange={handleChange} />
}

export default MediaUploader
