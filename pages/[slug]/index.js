import { useRouter } from "next/router"
import OrganizationHomePage from "../../features/organization-page/components/OrganizationHomePage"
import {
  fillOrganizationInfo,
  getStaticOrganizationPaths,
} from "../../features/organization-page/server-side-logic"

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

export const getStaticProps = fillOrganizationInfo
export const getStaticPaths = getStaticOrganizationPaths
