import Typography from "@mui/material/Typography"
import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelPage = ({ organization }) => {
  return (
    <PanelLayout organization={organization}>
      <h1>Dashboard</h1>
      <p>Will be available soon</p>
    </PanelLayout>
  )
}

PanelPage.isProtected = true

export default PanelPage

export const getServerSideProps = fetchUserOrganizationInfo
