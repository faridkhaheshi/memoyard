import { useTheme } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const PanelDrawerHeader = ({ closeDrawer }) => {
  const theme = useTheme()

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
      }}
    >
      <IconButton onClick={closeDrawer}>
        {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
  )
}

export default PanelDrawerHeader
