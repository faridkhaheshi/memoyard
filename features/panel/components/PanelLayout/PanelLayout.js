import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import PanelTopBar from "./PanelTopBar"
import PanelMain from "./PanelMain"
import PanelDrawer, { PanelDrawerHeader } from "./PanelDrawer"

import { PanelContextProvider } from "./../../contexts"

const DRAWER_WIDTH = 240

const PanelLayout = ({ children, organization }) => {
  const router = useRouter()
  return (
    <PanelContextProvider
      drawerWidth={DRAWER_WIDTH}
      initialOrg={organization}
      slug={router.query.slug}
    >
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <PanelTopBar />
        <PanelDrawer />
        <PanelMain>
          <PanelDrawerHeader />
          {children}
        </PanelMain>
      </Box>
    </PanelContextProvider>
  )
}

export default PanelLayout
