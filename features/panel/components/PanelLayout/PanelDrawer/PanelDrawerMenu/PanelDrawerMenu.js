import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"
import MemoNextLink from "../../../../../../components/MemoNextLink/index.js"

import drawerMenuItems from "./drawer-menu-items"
import { usePanelContext } from "../../../../contexts/panel.js"
import { useAuth } from "../../../../../../contexts/auth"

const PanelDrawerMenu = () => {
  const { slug } = usePanelContext()
  const { logOut } = useAuth()
  const availableMethods = {
    logOut: logOut.bind(null, "/"),
  }
  return (
    <List>
      {drawerMenuItems.map(({ text, Icon, href = undefined, onClick }) => (
        <ListItem
          button
          key={text}
          selected={`/${slug}/panel${href}` === location.pathname}
          href={href ? `/${slug}/panel${href}` : undefined}
          onClick={onClick ? availableMethods[onClick] : undefined}
          component={href ? MemoNextLink : ListItemButton}
        >
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
}

export default PanelDrawerMenu
