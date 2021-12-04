import { useRouter } from "next/router"
import Typography from "@mui/material/Typography"
import PanelLayout from "../../../../features/panel/components/PanelLayout"
import SubjectProfile from "../../../../features/panel/components/SubjectProfile"
import useOrgSubjects from "../../../../features/panel/hooks/use-org-subjects"

const PanelKidPage = () => {
  const {
    query: { subjectExId, slug },
  } = useRouter()

  const { subjects = [] } = useOrgSubjects(slug)
  const subject = subjects.find(s => s.ex_id === subjectExId)

  return (
    <PanelLayout>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
        {subject?.name}
      </Typography>
      {subject && <SubjectProfile subject={subject} />}
    </PanelLayout>
  )
}

export default PanelKidPage
