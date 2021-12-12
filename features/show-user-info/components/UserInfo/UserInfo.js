import Typography from "@mui/material/Typography"
import { useAuth } from "../../../../contexts/auth"

const UserInfo = props => {
  const { user } = useAuth()
  if (!user) return null
  return <Typography {...props}>{user.email}</Typography>
}

export default UserInfo
