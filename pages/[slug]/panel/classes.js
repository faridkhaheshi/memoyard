import Typography from "@mui/material/Typography"
import OrgGroups from "../../../features/panel/components/OrgGroups"
import PanelLayout from "../../../features/panel/components/PanelLayout"

const PanelClassesPage = () => (
  <PanelLayout>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
      Classes
    </Typography>
    <Typography variant="p">
      These are the classes that you have in your school.
    </Typography>
    <Typography variant="p" sx={{ marginBottom: "10px" }}>
      You can define classes like &quot;preschool&quot;, &quot;toddlers&quot; or
      &quot;infants&quot;.
    </Typography>
    <OrgGroups />
  </PanelLayout>
)

PanelClassesPage.isProtected = true

export default PanelClassesPage
