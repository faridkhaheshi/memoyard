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
      const { url } = await serverResponse.json()
      console.log(url)
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return <input type="file" onChange={handleChange} />
}

export default MediaUploader
