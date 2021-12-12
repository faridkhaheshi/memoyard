import Box from "@mui/material/Box"
import HomePageFooter from "../features/home-page/components/HomePageFooter"
import MemoyardInfoCard from "../features/home-page/components/MemoyardInfoCard"

const Homepage = () => (
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
    <MemoyardInfoCard />
    <HomePageFooter />
  </Box>
)

export default Homepage
