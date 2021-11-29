import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"

import PanelDrawerMenu from "./PanelDrawerMenu"
import PanelDrawerHeader from "./PanelDrawerHeader"
import PanelDrawerCloseButton from "./PanelDrawerCloseButton"
import { usePanelContext } from "../../../contexts"

const PanelDrawer = () => {
  const { isDrawerOpen: isOpen, drawerWidth } = usePanelContext()

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
      <PanelDrawerHeader>
        <PanelDrawerCloseButton />
      </PanelDrawerHeader>
      <Divider />
      <PanelDrawerMenu />
    </Drawer>
  )
}

export default PanelDrawer
