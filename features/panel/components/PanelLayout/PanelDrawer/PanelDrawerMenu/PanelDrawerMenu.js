import { useRouter } from "next/router"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MemoNextLink from "../../../../../../components/MemoNextLink/index.js"

import drawerMenuItems from "./drawer-menu-items"
import { usePanelContext } from "../../../../contexts/panel.js"
import { useAuth } from "../../../../../../contexts/auth"

const PanelDrawerMenu = () => {
  const router = useRouter()
  const { slug } = usePanelContext()
  const { logOut } = useAuth()
  const availableMethods = {
    logOut: logOut.bind(null, `/${slug}`),
  }
  return (
    <List>
      {drawerMenuItems.map(
        ({ text, Icon, href = undefined, onClick, shallow = true }) => (
          <ListItem
            button
            key={text}
            selected={
              `/${slug}/panel${href !== "/" ? href : ""}` === router.asPath
            }
            href={href !== undefined ? `/${slug}/panel${href}` : undefined}
            shallow={href ? shallow : undefined}
            onClick={onClick ? availableMethods[onClick] : undefined}
            component={href ? MemoNextLink : ListItemButton}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )
      )}
    </List>
  )
}

export default PanelDrawerMenu
