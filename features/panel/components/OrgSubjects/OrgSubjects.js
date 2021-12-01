import Typography from "@mui/material/Typography"
import SubjectsTable from "./SubjectsTable"
import SubjectAdder from "../SubjectAdder"

import { usePanelContext } from "../../contexts"
import { useOrgSubjects } from "../../hooks"

const OrgSubjects = () => {
  const { slug } = usePanelContext()
  const { subjects, isSubjectInfoLoading, refreshSubjectsInfo } =
    useOrgSubjects(slug)

  if (isSubjectInfoLoading)
    return <Typography variant="p">Loading...</Typography>

  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <SubjectAdder refresh={refreshSubjectsInfo} />
      <SubjectsTable subjects={subjects} />
    </div>
  )
}

export default OrgSubjects
