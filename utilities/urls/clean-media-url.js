const cleanMediaUrl = url => {
  const theUrl = new URL(url)
  return `${theUrl.protocol}//${theUrl.hostname}${theUrl.pathname}`
}

export default cleanMediaUrl
