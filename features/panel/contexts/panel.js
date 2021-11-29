import { useContext, createContext, useCallback, useState } from "react"

const PanelContext = createContext()
export const usePanelContext = () => useContext(PanelContext)

export const PanelContextProvider = ({
  children,
  drawerWidth,
  initialIsDrawerOpen = true,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(initialIsDrawerOpen)

  const openDrawer = useCallback(() => setIsDrawerOpen(true), [setIsDrawerOpen])
  const closeDrawer = useCallback(
    () => setIsDrawerOpen(false),
    [setIsDrawerOpen]
  )

  const panelContextValues = {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    drawerWidth,
  }

  return (
    <PanelContext.Provider value={panelContextValues}>
      {children}
    </PanelContext.Provider>
  )
}

export default PanelContext
