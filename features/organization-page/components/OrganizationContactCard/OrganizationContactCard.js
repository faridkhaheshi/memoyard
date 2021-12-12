import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import FixedAspectRatioPaper from "../../../../components/FixedAspectRatioPaper"
import MemoNextLink from "../../../../components/MemoNextLink"

const OrganizationContactCard = ({ organization }) => (
  <FixedAspectRatioPaper
    heightToWidthRatio="150%"
    width="40vh"
    maxWidth="95vw"
    elevation={12}
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: "#9C528B",
      borderRadius: "12px",
      color: "white",
    }}
  >
    <Box sx={{ padding: "40px 8px 0px 8px" }}>
      <Typography
        gutterBottom
        variant="h4"
        component="h1"
        align="center"
        sx={{ marginBottom: "40px" }}
      >
        {organization.name}
      </Typography>
      <hr />
    </Box>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "scroll",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: 0,
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
        sx={{ color: "rgba(255,255,255, 0.9)" }}
      >
        * All photos and videos are shared privately. Only parents of the
        children can access them.
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        minHeight: "64px",
      }}
    >
      <Button
        size="large"
        variant="outlined"
        component={MemoNextLink}
        href={`/${organization.slug}/album`}
        sx={{ color: "white", borderColor: "white" }}
      >
        Visit Album
      </Button>
    </CardActions>
  </FixedAspectRatioPaper>
)

export default OrganizationContactCard
