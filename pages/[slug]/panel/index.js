import Typography from "@mui/material/Typography"
import PanelLayout from "../../../features/panel/components/PanelLayout"
import Dashboard from "../../../features/panel/components/Dashboard"

const PanelPage = () => {
  return (
    <PanelLayout>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
        Dashboard
      </Typography>
      <Dashboard />
    </PanelLayout>
  )
}

PanelPage.isProtected = true

export default PanelPage
