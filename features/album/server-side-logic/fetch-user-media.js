import config from "../../../config"

const { baseUrl } = config

const fetchUserMedia = async ({ params, req }) => {
  const { slug } = params
  const reqHeaders = {
    method: "GET",
    headers: req ? { cookie: req.headers.cookie } : undefined,
  }
  const [orgRes, mediaRes, tagRes] = await Promise.all([
    fetch(`${baseUrl}/api/organizations/${slug}`, reqHeaders),
    fetch(`${baseUrl}/api/media?slug=${slug}`, reqHeaders),
    fetch(`${baseUrl}/api/tags?slug=${slug}`, reqHeaders),
  ])

  if (mediaRes.status !== 200 || orgRes.status !== 200 || tagRes.status !== 200)
    throw new Error("unable to fetch media")

  const [{ organization }, { media }, { tags }] = await Promise.all([
    orgRes.json(),
    mediaRes.json(),
    tagRes.json(),
  ])
  return {
    props: { media, organization, tags },
  }
}

export default fetchUserMedia
