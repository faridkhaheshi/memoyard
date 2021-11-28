import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"

const PanelTopBar = ({
  openDrawer,
  isDrawerOpen = false,
  heading = "Heading",
}) => (
  <AppBar position="fixed" open={isDrawerOpen}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={openDrawer}
        sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        {heading}
      </Typography>
    </Toolbar>
  </AppBar>
)

export default PanelTopBar
