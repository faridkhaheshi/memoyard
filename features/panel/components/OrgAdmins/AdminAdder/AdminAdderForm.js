import Box from "@mui/material/Box"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"
import Button from "@mui/material/Button"
import MultiGroupSelector from "./MultiGroupSelector"

const textFieldStyles = {
  flexGrow: 1,
  maxWidth: "400px",
  marginRight: 2,
  marginTop: 2,
}

const AdminAdderForm = ({
  sx = {},
  selectedGroups,
  onChangeSelectedGroups,
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  email,
  onEmailChange = () => ({}),
  disableEmailChange = false,
  onSubmit,
  onCancel,
  isLoading = false,
  submitText = "Add Teacher",
  hideActions = false,
  titleText = "Add new teacher",
}) => (
  <Paper elevation={4} component="form" onSubmit={onSubmit} sx={sx}>
    <CardContent>
      <Typography color="text.secondary" mb={2}>
        {titleText}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <TextField
          variant="standard"
          id="teacher-first-name"
          label="First Name"
          placeholder="first name of the teacher"
          sx={textFieldStyles}
          value={firstName}
          onChange={onFirstNameChange}
        />
        <TextField
          variant="standard"
          id="teacher-last-name"
          label="Last Name"
          placeholder="last name of the teacher"
          sx={textFieldStyles}
          value={lastName}
          onChange={onLastNameChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          disabled={disableEmailChange}
          variant="standard"
          id="teacher-email"
          label="E-mail"
          placeholder="email address of the teacher"
          sx={textFieldStyles}
          value={email}
          onChange={onEmailChange}
        />
      </Box>
      <MultiGroupSelector
        selectedGroups={selectedGroups}
        onChangeSelectedGroups={onChangeSelectedGroups}
      />
    </CardContent>
    {!hideActions && (
      <CardActions
        sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
      >
        {!isLoading && (
          <Button variant="text" color="inherit" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <LoadingButton type="submit" variant="outlined" loading={isLoading}>
          {submitText}
        </LoadingButton>
      </CardActions>
    )}
  </Paper>
)

export default AdminAdderForm
