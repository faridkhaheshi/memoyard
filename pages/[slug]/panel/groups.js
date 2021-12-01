import Typography from "@mui/material/Typography"
import OrgGroups from "../../../features/panel/components/OrgGroups"
import PanelLayout from "../../../features/panel/components/PanelLayout"
import fetchUserOrganizationInfo from "../../../features/panel/server-side-logic/fetch-user-organization-info"

const PanelGroupsPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
      Groups
    </Typography>
    <Typography variant="p" sx={{ marginBottom: "40px" }}>
      These are the groups that you have in your school. In addition to the
      typical classes (like 'preschool', 'toddlers' or 'infants') you can define
      other groups. For example you can have a group for 'everyone' and send the
      images and videos that you want everyone to see to this group.
    </Typography>
    <OrgGroups />
  </PanelLayout>
)

PanelGroupsPage.isProtected = true

export default PanelGroupsPage

export const getServerSideProps = fetchUserOrganizationInfo
