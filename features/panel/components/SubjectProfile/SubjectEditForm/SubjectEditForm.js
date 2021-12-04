import { useState, useCallback } from "react"
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

const SubjectEditForm = ({ subject }) => {
  const [name, setName] = useState(subject?.name || "")
  const [active, setActive] = useState(subject?.active || false)
  const [groupExId, setGroupExId] = useState(
    (subject?.groups || []).length === 0 ? "" : subject?.groups[0].ex_id
  )

  const resetForm = useCallback(() => {
    setName(subject?.name)
    setActive(subject?.active)
    setGroupExId(
      (subject?.groups || []).length === 0 ? "" : subject?.groups[0].ex_id
    )
  }, [setName, subject, setActive, setGroupExId])

  return (
    <Paper elevation={4} component="form">
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
            "&>*": {
              marginRight: 2,
              marginTop: 2,
              maxWidth: "400px",
            },
          }}
        >
          <TextField
            required
            value={name}
            onChange={e => setName(e.target.value)}
            id="kid-name"
            label="Name"
            sx={{ flexGrow: 1 }}
          />
          <GroupSelector
            id="kid-group"
            required
            value={groupExId}
            onChange={e => setGroupExId(e.target.value)}
            sx={{ flexGrow: 1 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="kid-active"
                checked={active}
                onChange={e => setActive(e.target.checked)}
              />
            }
            label="Active"
          />
        </Box>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
      >
        <Button variant="text" onClick={resetForm} color="inherit">
          Cancel
        </Button>
        <LoadingButton type="submit" variant="outlined">
          Save Changes
        </LoadingButton>
      </CardActions>
    </Paper>
  )
}

export default SubjectEditForm
