import Typography from "@mui/material/Typography"
import PanelLayout from "../../../features/panel/components/PanelLayout"
import OrgSubjects from "../../../features/panel/components/OrgSubjects"

const PanelKidsPage = () => (
  <PanelLayout>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
      Kids
    </Typography>
    <OrgSubjects />
  </PanelLayout>
)

PanelKidsPage.isProtected = true

export default PanelKidsPage
