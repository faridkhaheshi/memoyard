import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SubjectEditor from "./SubjectEditor"
import SubjectListeners from "./SubjectListeners"
import { useSubjectContext } from "../../contexts/subject"

const SubjectProfile = () => {
  const { subject } = useSubjectContext()
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "10px" }}>
        {subject?.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 3,
          "&>*": { margin: "8px 0" },
        }}
      >
        <SubjectEditor />
        <SubjectListeners />
      </Box>
    </>
  )
}

export default SubjectProfile
