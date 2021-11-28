import { useTheme } from "@mui/material/styles"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import PanelDrawerHeader from "./PanelDrawerHeader"

import styles from "./PanelDrawer.module.scss"

const PanelDrawer = ({ drawerWidth, isOpen, closeDrawer }) => {
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <PanelDrawerHeader closeDrawer={closeDrawer} />
      <Divider />
    </Drawer>
  )
}

export default PanelDrawer
