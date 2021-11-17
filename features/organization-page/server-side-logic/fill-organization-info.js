import config from "../../../config"

const { baseUrl } = config
const revalidationMins = 5

const fillOrganizationInfo = async ({ params }) => {
  try {
    const { slug } = params
    const orgResponse = await fetch(`${baseUrl}/api/organizations/${slug}`)
    if (orgResponse.status !== 200) return { notFound: true }
    const { organization } = await orgResponse.json()
    return {
      props: { organization },
      revalidate: revalidationMins * 60,
    }
  } catch (err) {
    console.error("error")
    console.error(err)
    return {
      props: {},
    }
  }
}

export default fillOrganizationInfo
