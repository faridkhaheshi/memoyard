import Typography from "@mui/material/Typography"
import {
  PanelLayout,
  fetchUserOrganizationInfo,
  OrgSubjects,
} from "../../../features/panel"

const PanelChildrenPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
      Children
    </Typography>
    <OrgSubjects />
  </PanelLayout>
)

PanelChildrenPage.isProtected = true

export default PanelChildrenPage

export const getServerSideProps = fetchUserOrganizationInfo
