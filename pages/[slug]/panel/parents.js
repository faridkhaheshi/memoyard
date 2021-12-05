import Typography from "@mui/material/Typography"
import PanelLayout from "../../../features/panel/components/PanelLayout"

const PanelParentsPage = () => (
  <PanelLayout>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
      Parents
    </Typography>
    <Typography component="p">Under Construction</Typography>
  </PanelLayout>
)

PanelParentsPage.isProtected = true

export default PanelParentsPage
