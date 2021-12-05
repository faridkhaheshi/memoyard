import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import SubjectListenersTable from "./SubjectListenerTable"
import SubjectListenerAdder from "./SubjectListenerAdder"
import { useSubjectContext } from "../../../contexts/subject"

const SubjectListeners = () => {
  const { subject } = useSubjectContext()
  return (
    <Paper elevation={4} sx={{ padding: 2 }}>
      <Typography color="text.secondary" mb={4}>
        {`${subject?.name}'s Parents`}
      </Typography>
      <SubjectListenersTable />
      <SubjectListenerAdder />
    </Paper>
  )
}

export default SubjectListeners
