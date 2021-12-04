import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import LoadingButton from "@mui/lab/LoadingButton"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const textFieldStyles = {
  flexGrow: 1,
  maxWidth: "400px",
  marginRight: 2,
  marginTop: 2,
}

const SubjectListenerForm = ({
  sx,
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  email,
  onEmailChange,
  mobile,
  onMobileChange,
  onSubmit,
}) => (
  <Card variant="outlined" sx={sx} component="form" onSubmit={onSubmit}>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography color="text.secondary">{`Add new parent:`}</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <TextField
          variant="standard"
          id="parent-first-name"
          label="First Name"
          placeholder="first name of the parent"
          sx={textFieldStyles}
          value={firstName}
          onChange={onFirstNameChange}
        />
        <TextField
          variant="standard"
          id="parent-last-name"
          label="Last Name"
          placeholder="last name of the parent"
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
          variant="standard"
          id="parent-email"
          label="E-mail"
          placeholder="email address of the parent"
          sx={textFieldStyles}
          value={email}
          onChange={onEmailChange}
        />
        <TextField
          variant="standard"
          id="parent-mobile"
          label="Mobile"
          placeholder="mobile number of the parent"
          sx={textFieldStyles}
          value={mobile}
          onChange={onMobileChange}
        />
      </Box>
    </CardContent>
    <CardActions
      sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
    >
      <Button variant="text" color="inherit">
        Cancel
      </Button>
      <LoadingButton variant="outlined" type="submit">
        Add Parent
      </LoadingButton>
    </CardActions>
  </Card>
)

export default SubjectListenerForm
