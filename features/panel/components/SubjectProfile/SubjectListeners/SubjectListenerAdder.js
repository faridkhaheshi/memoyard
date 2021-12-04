import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import LoadingButton from "@mui/lab/LoadingButton"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const SubjectListenerAdder = ({ sx = {} }) => {
  return (
    <Card variant="outlined" sx={sx}>
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
            "&>*": { maxWidth: "400px", marginRight: 2, marginTop: 2 },
          }}
        >
          <TextField
            variant="standard"
            id="parent-first-name"
            label="First Name"
            placeholder="first name of the parent"
            sx={{ flexGrow: 1 }}
          />
          <TextField
            variant="standard"
            id="parent-last-name"
            label="Last Name"
            placeholder="last name of the parent"
            sx={{ flexGrow: 1 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            "&>*": { maxWidth: "400px", marginRight: 2, marginTop: 2 },
          }}
        >
          <TextField
            variant="standard"
            id="parent-email"
            label="E-mail"
            placeholder="email address of the parent"
            sx={{ flexGrow: 1 }}
          />
          <TextField
            variant="standard"
            id="parent-mobile"
            label="Mobile"
            placeholder="mobile number of the parent"
            sx={{ flexGrow: 1 }}
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
}

export default SubjectListenerAdder
