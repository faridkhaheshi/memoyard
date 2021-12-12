import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

const OrganizationHomeLoading = () => (
  <Box
    sx={{
      height: "100%",
      flex: 1,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 1,
    }}
  >
    <CircularProgress />
  </Box>
)

export default OrganizationHomeLoading
