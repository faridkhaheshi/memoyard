import { NextSeo } from "next-seo"
import FullPageCentered from "../../../../components/FullPageCentered"

const OrganizationHomeLoading = ({ organization }) => (
  <FullPageCentered bgColor="skyBlue">
    <NextSeo title={organization.name} />
    Loading...
  </FullPageCentered>
)

export default OrganizationHomeLoading
