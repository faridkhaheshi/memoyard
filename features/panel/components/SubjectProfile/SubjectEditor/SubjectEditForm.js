import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import LoadingButton from "@mui/lab/LoadingButton"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import GroupSelector from "../../OrgSubjects/GroupSelector"

import { useSubjectContext } from "../../../contexts/subject"

const SubjectEditForm = ({
  name,
  onNameChange,
  active,
  onActiveChange,
  groupExId,
  onGroupExIdChange,
  onCancel,
  onSubmit,
  hasChanged = false,
}) => {
  const { subject } = useSubjectContext()
  return (
    <Paper elevation={4} component="form" onSubmit={onSubmit}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          "&>*": { margin: "8px 0" },
        }}
      >
        <Typography color="text.secondary" mb={2}>
          {`${subject?.name}'s info`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <TextField
            required
            value={name}
            onChange={onNameChange}
            id="kid-name"
            label="Name"
            sx={{
              flexGrow: 1,
              marginRight: 2,
              marginTop: 1,
              maxWidth: "400px",
            }}
          />
          <GroupSelector
            id="kid-group"
            required
            value={groupExId}
            onChange={onGroupExIdChange}
            sx={{
              flexGrow: 1,
              marginRight: 2,
              marginTop: 1,
              maxWidth: "400px",
            }}
          />
          <FormControlLabel
            sx={{
              flexGrow: 1,
              marginRight: 2,
              marginTop: 1,
              maxWidth: "400px",
            }}
            control={
              <Checkbox
                id="kid-active"
                checked={active}
                onChange={onActiveChange}
              />
            }
            label="Active"
          />
        </Box>
      </CardContent>
      {hasChanged && (
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
        >
          <Button variant="text" onClick={onCancel} color="inherit">
            Cancel
          </Button>
          <LoadingButton type="submit" variant="outlined">
            Save Changes
          </LoadingButton>
        </CardActions>
      )}
    </Paper>
  )
}

export default SubjectEditForm
