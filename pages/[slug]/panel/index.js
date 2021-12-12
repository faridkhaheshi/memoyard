import Typography from "@mui/material/Typography"
import Dashboard from "../../../features/panel/components/Dashboard"

const PanelPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
        Dashboard
      </Typography>
      <Dashboard />
    </>
  )
}

PanelPage.isProtected = true
PanelPage.isPanelPage = true

export default PanelPage
