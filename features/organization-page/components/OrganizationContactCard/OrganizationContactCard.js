import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import FixedAspectRatioPaper from "../../../../components/FixedAspectRatioPaper"

const OrganizationContactCard = ({ organization }) => (
  <FixedAspectRatioPaper
    heightToWidthRatio="150%"
    width="40vh"
    elevation={12}
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      overflow: "scroll",
      backgroundColor: "#9C528B",
      borderRadius: "12px",
      color: "white",
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        gutterBottom
        variant="h4"
        component="h1"
        align="center"
        sx={{ margin: "64px 0 64px 0" }}
      >
        {organization.name}
      </Typography>
      <hr style={{ width: "100%" }} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "32px 0 0 0",
        }}
      >
        <Typography gutterBottom align="justify">
          Here you can view photos and videos of your child during their time in
          school.
        </Typography>
      </Box>
      <Typography
        variant="caption"
        component="small"
        sx={{ color: "rgba(255,255,255, 0.6)" }}
      >
        * All photos and videos are shared privately. Only parents of the
        children can access them.
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0 0 16px 0",
      }}
    >
      <Button
        size="large"
        variant="outlined"
        href="/"
        sx={{ color: "white", borderColor: "white" }}
      >
        Visit Album
      </Button>
    </CardActions>
  </FixedAspectRatioPaper>
)

export default OrganizationContactCard
