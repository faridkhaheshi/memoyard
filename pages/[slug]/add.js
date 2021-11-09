import {
  fillOrganizationInfo,
  getStaticOrganizationPaths,
} from "../../features/organization-page/server-side-logic"
import AddMediaPage from "../../features/upload-media/components/AddMediaPage"

export default function AddPage({ organization }) {
  return <AddMediaPage organization={organization} />
}

export const getStaticProps = fillOrganizationInfo
export const getStaticPaths = getStaticOrganizationPaths
