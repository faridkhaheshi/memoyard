import Box from "@mui/material/Box"
import UserMenu from "../../../show-user-info/components/UserMenu"
import OrganizationFooterLinks from "./OrganizationFooterLinks"

const OrganizationFooter = () => (
  <Box
    sx={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      padding: "8px 16px",
      color: "gray",
    }}
    component="footer"
  >
    <OrganizationFooterLinks />
    <UserMenu />
  </Box>
)

export default OrganizationFooter
