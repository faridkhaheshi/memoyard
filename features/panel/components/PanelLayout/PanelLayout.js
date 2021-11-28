import { useState } from "react"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import PanelTopBar from "./PanelTopBar"
import PanelMain from "./PanelMain"
import PanelDrawer from "./PanelDrawer"

const DRAWER_WIDTH = 240

const PanelLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const openDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PanelTopBar
        heading="dashboard"
        openDrawer={openDrawer}
        isDrawerOpen={isOpen}
        drawerWidth={DRAWER_WIDTH}
      />
      <PanelDrawer
        drawerWidth={DRAWER_WIDTH}
        isOpen={isOpen}
        closeDrawer={closeDrawer}
      />
      <PanelMain drawerWidth={DRAWER_WIDTH} isDrawerOpen={isOpen}>
        {children}
      </PanelMain>
    </Box>
  )
}

export default PanelLayout
