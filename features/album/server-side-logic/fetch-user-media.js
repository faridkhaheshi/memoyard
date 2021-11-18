import config from "../../../config"

const { baseUrl } = config

const fetchUserMedia = async ({ params, req }) => {
  const { slug } = params
  const [orgRes, mediaRes] = await Promise.all([
    fetch(`${baseUrl}/api/organizations/${slug}`),
    fetch(`${baseUrl}/api/media?slug=${slug}`, {
      method: "GET",
      headers: req ? { cookie: req.headers.cookie } : undefined,
    }),
  ])

  if (mediaRes.status !== 200 || orgRes.status !== 200)
    throw new Error("unable to fetch media")

  const [{ organization }, { media }] = await Promise.all([
    orgRes.json(),
    mediaRes.json(),
  ])
  return {
    props: { media, organization },
  }
}

export default fetchUserMedia
