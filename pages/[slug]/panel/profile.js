import Typography from "@mui/material/Typography"

import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"
import ProfileEditCard from "../../../features/panel/components/ProfileEditCard"

const PanelProfilePage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
      Profile
    </Typography>
    <ProfileEditCard />
  </PanelLayout>
)

PanelProfilePage.isProtected = true

export default PanelProfilePage

export const getServerSideProps = fetchUserOrganizationInfo
