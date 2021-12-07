import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const KidsInfo = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          padding: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          alignCenter
          variant="body1"
          component="h2"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            alignCenter
            variant="h2"
            component="span"
            sx={{ margin: 0 }}
          >
            32
          </Typography>
          kids
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Typography variant="body1">
            When you send a photo/video for a kid, only parents of that kid has
            access to that photo/video.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 2,
          }}
        >
          <Button variant="text">Manage Kids</Button>
        </CardActions>
      </Box>
    </Box>
  )
}

export default KidsInfo
