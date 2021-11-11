const detectMediaType = mimeType => {
  if (/video\//gi.test(mimeType)) return "video"
  else if (/image\//gi.test(mimeType)) return "photo"
  return null
}

export default detectMediaType
