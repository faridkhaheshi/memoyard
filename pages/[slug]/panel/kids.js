import Typography from "@mui/material/Typography"
import PanelLayout from "../../../features/panel/components/PanelLayout"
import OrgSubjects from "../../../features/panel/components/OrgSubjects"

const PanelKidsPage = () => (
  <PanelLayout>
    <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
      Kids
    </Typography>
    <Typography component="p">
      Here you can add new kids to your school. Each kids belongs to a class.
    </Typography>
    <Typography component="p" sx={{ marginBottom: "10px" }}>
      When you send a photo/video, you can specify the name of the kid/kids to
      whom the media is related to. The memo will be available only to parents
      of the kids you or your teachers specify while uploading the photo/video.
    </Typography>
    <OrgSubjects />
  </PanelLayout>
)

PanelKidsPage.isProtected = true

export default PanelKidsPage
