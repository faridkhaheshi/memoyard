import { useTheme } from "@mui/material/styles"

const PanelMain = ({ children, drawerWidth, isDrawerOpen = false }) => {
  const theme = useTheme()
  return (
    <main
      style={{
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(isDrawerOpen && {
          marginLeft: 0,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: "flex-end",
        }}
      />
      {children}
    </main>
  )
}

export default PanelMain
