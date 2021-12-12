import Typography from "@mui/material/Typography"
import OrgGroups from "../../../features/panel/components/OrgGroups"
import NavBranch from "../../../features/breadcrumbs/components/NavBranch"

const PanelClassesPage = () => (
  <>
    <NavBranch links={[{ type: "text", title: "Classes" }]} />
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
  </>
)

PanelClassesPage.isProtected = true
PanelClassesPage.isPanelPage = true

export default PanelClassesPage
