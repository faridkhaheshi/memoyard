import { useRouter } from "next/router"
import OrganizationHomeLoading from "../../features/organization-page/components/OrganizationHomeLoading"
import {
  fillOrganizationInfo,
  getStaticOrganizationPaths,
} from "../../features/organization-page/server-side-logic"
import AddMediaPage from "../../features/upload-media/components/AddMediaPage"

export default function AddPage({ organization }) {
  const router = useRouter()
  if (router.isFallback) return <OrganizationHomeLoading />
  return <AddMediaPage organization={organization} />
}

export const getStaticProps = fillOrganizationInfo
export const getStaticPaths = getStaticOrganizationPaths
