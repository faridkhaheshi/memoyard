import { useState } from "react"
import { useRouter } from "next/router"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useAuth } from "../../../../contexts/auth"

const UserMenu = () => {
  const { user, logOut } = useAuth()
  const {
    query: { slug },
  } = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const openMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }

  if (!user) return null

  return (
    <Box>
      <Button
        sx={{ textTransform: "none" }}
        variant="text"
        size="small"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={openMenu}
      >
        {user.email}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logOut.bind(null, `/${slug}`)}>Log Out</MenuItem>
      </Menu>
    </Box>
  )
}

export default UserMenu
