import Typography from "@mui/material/Typography"
import SubjectsTable from "./SubjectsTable"
import SubjectAdder from "../SubjectAdder"

import { usePanelContext } from "../../contexts"
import { useOrgSubjects } from "../../hooks"

const OrgSubjects = () => {
  const { slug } = usePanelContext()
  const { subjects, isSubjectInfoLoading } = useOrgSubjects(slug)

  if (isSubjectInfoLoading)
    return <Typography variant="p">Loading...</Typography>

  return (
    <>
      <SubjectAdder />
      <SubjectsTable subjects={subjects} />
    </>
  )
}

export default OrgSubjects
