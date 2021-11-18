import config from "../../../config"

const { baseUrl } = config

const fetchUserMedia = async ({ params, req }) => {
  const { slug } = params
  const mediaRes = await fetch(`${baseUrl}/api/media?slug=${slug}`, {
    method: "GET",
    headers: req ? { cookie: req.headers.cookie } : undefined,
  })
  if (mediaRes.status !== 200) throw new Error("unable to fetch media")
  const { media } = await mediaRes.json()
  return {
    props: { media },
  }
}

export default fetchUserMedia
