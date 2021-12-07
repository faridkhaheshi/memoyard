import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent"
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
      <CardContent sx={{ flexGrow: 1 }}>Some info</CardContent>
    </Box>
  )
}

export default KidsInfo
