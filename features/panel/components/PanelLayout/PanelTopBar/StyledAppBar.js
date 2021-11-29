import AppBar from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: prop =>
    ["isDrawerOpen", "drawerWidth"].indexOf(prop) === -1,
})(({ theme, isDrawerOpen, drawerWidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default StyledAppBar
