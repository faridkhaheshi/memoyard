import { useRouter } from "next/router"
import OrganizationHomeLoading from "../../features/organization-page/components/OrganizationHomeLoading"
import {
  fillOrganizationInfo,
  getStaticOrganizationPaths,
} from "../../features/organization-page/server-side-logic"
import AddMediaPage from "../../features/upload-media/components/AddMediaPage"

const AddPage = ({ organization }) => {
  const router = useRouter()
  if (router.isFallback) return <OrganizationHomeLoading />
  return <AddMediaPage organization={organization} />
}

AddPage.isProtected = true

export default AddPage
export const getStaticProps = fillOrganizationInfo
export const getStaticPaths = getStaticOrganizationPaths
