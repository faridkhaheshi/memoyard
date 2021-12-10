import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import PanelTopBar from "./PanelTopBar"
import PanelMain from "./PanelMain"
import PanelDrawer, { PanelDrawerHeader } from "./PanelDrawer"

import { PanelContextProvider } from "./../../contexts"

const DRAWER_WIDTH = 240

const PanelLayout = ({ children }) => (
  <PanelContextProvider drawerWidth={DRAWER_WIDTH}>
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <PanelTopBar />
      <PanelDrawer />
      <PanelMain>
        <PanelDrawerHeader />
        {children}
      </PanelMain>
    </Box>
  </PanelContextProvider>
)

export default PanelLayout
