import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SubjectEditForm from "./SubjectEditForm"
import SubjectListeners from "./SubjectListeners"

const SubjectProfile = ({ subject }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 3,
        "&>*": { margin: "8px 0" },
      }}
    >
      <SubjectEditForm subject={subject} />
      <SubjectListeners listeners={subject?.listeners} subject={subject} />
    </Box>
  )
}

export default SubjectProfile
