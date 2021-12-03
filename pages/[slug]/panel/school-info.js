import Typography from "@mui/material/Typography"
import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelShoolInfoPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <Typography variant="h4" component="h1">
      School Info
    </Typography>
    <Typography variant="p">Under Construction</Typography>
  </PanelLayout>
)

PanelShoolInfoPage.isProtected = true

export default PanelShoolInfoPage

export const getServerSideProps = fetchUserOrganizationInfo
