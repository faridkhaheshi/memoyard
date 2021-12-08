import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import MemoNextLink from "../../../../../components/MemoNextLink"

const NumberedDashboardRow = ({
  headingNumber,
  headingText,
  description,
  linkText,
  href,
}) => (
  <Box sx={{ display: "flex", height: "100%" }}>
    <Box
      sx={{
        padding: "32px 0px 32px 32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="body1"
        component="h2"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" component="span" sx={{ margin: 0 }}>
          {headingNumber}
        </Typography>
        {headingText}
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
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <Button variant="text" href={href} component={MemoNextLink}>
          {linkText}
        </Button>
      </CardActions>
    </Box>
  </Box>
)

export default NumberedDashboardRow
