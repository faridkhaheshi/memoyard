import Typography from "@mui/material/Typography"
import { PanelLayout } from "../../../features/panel/components"
import { fetchUserOrganizationInfo } from "../../../features/panel"

const PanelPage = ({ organization, slug }) => (
  <PanelLayout organization={organization} slug={slug}>
    <pre>{JSON.stringify(organization, null, 2)}</pre>
  </PanelLayout>
)

PanelPage.isProtected = true

export default PanelPage

export const getServerSideProps = fetchUserOrganizationInfo
