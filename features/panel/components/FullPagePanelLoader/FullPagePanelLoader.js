import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

const FullPagePanelLoader = () => (
  <Box
    sx={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
)

export default FullPagePanelLoader
