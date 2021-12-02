import Typography from "@mui/material/Typography"

import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"
import ProfileEditCard from "../../../features/panel/components/ProfileEditCard"

const PanelProfilePage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <Typography variant="h4" component="h1">
      Profile
    </Typography>
    <Typography variant="p">Under Construction</Typography>
    {/* <ProfileEditCard /> */}
  </PanelLayout>
)

PanelProfilePage.isProtected = true

export default PanelProfilePage

export const getServerSideProps = fetchUserOrganizationInfo
