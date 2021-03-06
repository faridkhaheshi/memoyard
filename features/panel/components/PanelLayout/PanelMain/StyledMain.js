import { styled } from "@mui/material/styles"

const StyledMain = styled("main", {
  shouldForwardProp: prop =>
    ["isDrawerOpen", "drawerWidth"].indexOf(prop) === -1,
})(({ theme, isDrawerOpen, drawerWidth }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(isDrawerOpen && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

export default StyledMain
