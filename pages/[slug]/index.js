import { useRouter } from "next/router"
import OrganizationHomePage from "../../features/organization-page/components/OrganizationHomePage"
import config from "./../../config"

const { baseUrl } = config

const revalidationMins = 5

function OrganizationPage({ organization }) {
  const router = useRouter()

  return (
    <OrganizationHomePage
      organization={organization}
      loading={router.isFallback}
    />
  )
}

export default OrganizationPage

export async function getStaticProps({ params }) {
  const { slug } = params
  const orgResponse = await fetch(`${baseUrl}/api/organizations/${slug}`)
  if (orgResponse.status !== 200) return { notFound: true }
  const { organization } = await orgResponse.json()
  return {
    props: { organization },
    revalidate: revalidationMins * 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "fantasy" } }],
    fallback: true,
  }
}
