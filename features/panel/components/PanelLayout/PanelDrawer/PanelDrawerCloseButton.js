import { useTheme } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { usePanelContext } from "../../../contexts"

const PanelDrawerCloseButton = () => {
  const theme = useTheme()
  const { closeDrawer } = usePanelContext()

  return (
    <IconButton onClick={closeDrawer}>
      {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  )
}

export default PanelDrawerCloseButton
