import config from "../../../config"

const { baseUrl } = config

const fetchUserOrganizationInfo = async ({ req, query }) => {
  const { slug } = query

  if (!req.headers.cookie) return { props: {} }

  const reqHeaders = {
    method: "GET",
    headers: req ? { cookie: req.headers.cookie } : undefined,
  }

  const organizationsRes = await fetch(
    `${baseUrl}/api/organizations?slug=${slug}`,
    reqHeaders
  )

  if (organizationsRes.status !== 200)
    throw new Error("unable to fetch organization")
  const { organizations } = await organizationsRes.json()

  return {
    props: {
      organization: organizations.length > 0 ? organizations[0] : null,
      slug,
    },
  }
}

export default fetchUserOrganizationInfo
