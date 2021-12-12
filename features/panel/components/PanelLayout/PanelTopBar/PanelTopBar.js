import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import StyledAppBar from "./StyledAppBar"
import MemoNextLink from "../../../../../components/MemoNextLink"
import UserInfo from "../../../../show-user-info/components/UserInfo/UserInfo"
import { usePanelContext } from "../../../contexts"

const PanelTopBar = () => {
  const { isDrawerOpen, openDrawer, drawerWidth, organization } =
    usePanelContext()

  return (
    <StyledAppBar
      position="fixed"
      isDrawerOpen={isDrawerOpen}
      drawerWidth={drawerWidth}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          edge="start"
          sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            "& a": { color: "inherit", "&:hover": { textDecoration: "none" } },
          }}
        >
          <MemoNextLink href={`/${organization.slug}`}>
            {organization?.name}
          </MemoNextLink>
        </Typography>
        <UserInfo />
      </Toolbar>
    </StyledAppBar>
  )
}

export default PanelTopBar
