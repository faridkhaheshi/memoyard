import { useRouter } from "next/router"
import { NextSeo } from "next-seo"
import config from "./../../config"
import CenteredForm from "../../components/CenteredForm"
import FullPageCentered from "../../components/FullPageCentered"

const { baseUrl } = config

const revalidationMins = 5

function OrganizationPage(props) {
  const router = useRouter()

  if (router.isFallback)
    return (
      <FullPageCentered bgColor="skyBlue">
        <NextSeo title={"organization page"} />
        Loading...
      </FullPageCentered>
    )

  return (
    <FullPageCentered bgColor="skyBlue">
      <NextSeo title={"organization page"} />
      <CenteredForm>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </CenteredForm>
    </FullPageCentered>
  )
}

export default OrganizationPage

export async function getStaticProps({ params }) {
  const { slug } = params
  const orgResponse = await fetch(`${baseUrl}/api/organizations/${slug}`)
  if (orgResponse.status !== 200) return { notFound: true }
  const organization = await orgResponse.json()
  return { props: { organization }, revalidate: revalidationMins * 60 }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "fantasy" } }],
    fallback: true,
  }
}
