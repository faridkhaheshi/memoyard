import { usePanelContext } from "../../../contexts"
import StyledMain from "./StyledMain"

const PanelMain = ({ children }) => {
  const { drawerWidth, isDrawerOpen } = usePanelContext()

  return (
    <StyledMain drawerWidth={drawerWidth} isDrawerOpen={isDrawerOpen}>
      {children}
    </StyledMain>
  )
}

export default PanelMain
