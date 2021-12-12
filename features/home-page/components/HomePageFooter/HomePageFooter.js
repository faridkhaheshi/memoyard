import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const HomePageFooter = () => (
  <Box
    sx={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: "8px 16px",
      color: "gray",
    }}
    component="footer"
  >
    <Typography variant="caption">
      Made with ❤️ by a father in Hamilton, Canada
    </Typography>
  </Box>
)

export default HomePageFooter
