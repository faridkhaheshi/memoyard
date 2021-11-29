import { useContext, createContext, useCallback, useState } from "react"
import useOrganization from "../../../hooks/use-organization/use-organization"

const PanelContext = createContext()
export const usePanelContext = () => useContext(PanelContext)

export const PanelContextProvider = ({
  children,
  drawerWidth,
  initialIsDrawerOpen = true,
  initialOrg,
  slug,
}) => {
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
    initialOrg,
    isDrawerOpen,
    openDrawer,
    organization: isOrgLoading ? initialOrg : organization,
    slug,
  }

  return (
    <PanelContext.Provider value={panelContextValues}>
      {children}
    </PanelContext.Provider>
  )
}

export default PanelContext
