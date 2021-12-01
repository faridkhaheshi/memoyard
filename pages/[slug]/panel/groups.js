import Typography from "@mui/material/Typography"
import OrgGroups from "../../../features/panel/components/OrgGroups"
import PanelLayout from "../../../features/panel/components/PanelLayout"
import fetchUserOrganizationInfo from "../../../features/panel/server-side-logic/fetch-user-organization-info"

const PanelGroupsPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
      Groups
    </Typography>
    <Typography variant="p">
      These are the groups that you have in your school.
    </Typography>
    <Typography variant="p" sx={{ marginBottom: "40px" }}>
      In addition to the typical classes (like &quot;preschool&quot;,
      &quot;toddlers&quot; or &quot;infants&quot;) you can define other groups.
      For example you can have a group for &quot;everyone&quot; and send the
      images and videos that you want everyone to see to this group.
    </Typography>
    <OrgGroups />
  </PanelLayout>
)

PanelGroupsPage.isProtected = true

export default PanelGroupsPage

export const getServerSideProps = fetchUserOrganizationInfo
