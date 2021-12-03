import { useContext, createContext, useCallback, useState } from "react"
import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import useOrganization from "../../../hooks/use-organization/use-organization"

const PanelContext = createContext()
export const usePanelContext = () => useContext(PanelContext)

export const PanelContextProvider = ({
  children,
  drawerWidth,
  initialIsDrawerOpen = true,
}) => {
  const {
    query: { slug },
  } = useRouter()
  const { organization, isOrgLoading, orgError, hasOrgInfo } =
    useOrganization(slug)
  const [isDrawerOpen, setIsDrawerOpen] = useState(initialIsDrawerOpen)

  const openDrawer = useCallback(() => setIsDrawerOpen(true), [setIsDrawerOpen])
  const closeDrawer = useCallback(
    () => setIsDrawerOpen(false),
    [setIsDrawerOpen]
  )

  const panelContextValues = {
    closeDrawer,
    drawerWidth,
    isDrawerOpen,
    openDrawer,
    organization,
    slug,
  }

  if (isOrgLoading)
    return (
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    )

  return (
    <PanelContext.Provider value={panelContextValues}>
      {children}
    </PanelContext.Provider>
  )
}

export default PanelContext
