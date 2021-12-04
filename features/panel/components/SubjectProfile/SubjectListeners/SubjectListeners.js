import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

import SubjectListenersTable from "./SubjectListenersTable"
import SubjectListenerAdder from "./SubjectListenerAdder"

const SubjectListeners = ({ subject, listeners }) => {
  return (
    <Paper elevation={4} sx={{ padding: 2 }}>
      <Typography color="text.secondary" mb={4}>
        {`${subject?.name}'s Parents`}
      </Typography>
      <SubjectListenersTable subject={subject} listeners={listeners} />
      <SubjectListenerAdder sx={{ marginTop: 2 }} />
    </Paper>
  )
}

export default SubjectListeners
