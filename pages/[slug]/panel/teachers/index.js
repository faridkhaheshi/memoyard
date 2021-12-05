import PanelLayout from "../../../../features/panel/components/PanelLayout"
import Typography from "@mui/material/Typography"
import OrgAdmins from "../../../../features/panel/components/OrgAdmins"

const PanelTeachersPage = () => {
  return (
    <PanelLayout>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
        Teachers
      </Typography>
      <Typography component="p">
        Here you can manage the teachers in your school.
      </Typography>
      <Typography component="p" sx={{ marginBottom: "10px" }}>
        Teachers can post photos/videos to their classes. They can also post to
        every kid in their classes. So by adding new teachers you are
        authorizing them to post to the specific classes you specify.
      </Typography>
      <OrgAdmins />
    </PanelLayout>
  )
}

PanelTeachersPage.isProtected = true

export default PanelTeachersPage
