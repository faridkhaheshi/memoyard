import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import PanelTopBar from "./PanelTopBar"

const DRAWER_WIDTH = 240

const PanelLayout = () => {
  const theme = useTheme()
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
      />
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <IconButton onClick={closeDrawer}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Drawer>
      <div>Main</div>
    </Box>
  )
}

export default PanelLayout
