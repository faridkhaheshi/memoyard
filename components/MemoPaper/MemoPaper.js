import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import FixedAspectRatioPaper from "../FixedAspectRatioPaper"
import MemoNextLink from "../MemoNextLink"

const MemoPaper = ({
  children,
  width = "40vh",
  maxWidth = "95vw",
  elevation = 12,
  component = "div",
  bgColor = "#232ED1",
  sx = {},
  title = "title",
  actionText = "Visit",
  actionProps = {
    href: "/",
  },
}) => (
  <FixedAspectRatioPaper
    heightToWidthRatio="150%"
    width={width}
    maxWidth={maxWidth}
    elevation={elevation}
    component={component}
    sx={{
      borderRadius: "12px",
      color: "white",
      backgroundColor: bgColor,
      ...sx,
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
        {title}
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
      {children}
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
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            backgroundColor: "white",
            color: bgColor,
            borderColor: "white",
          },
        }}
        {...actionProps}
      >
        {actionText}
      </Button>
    </CardActions>
  </FixedAspectRatioPaper>
)

export default MemoPaper
