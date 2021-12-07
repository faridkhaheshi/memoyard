import Typography from "@mui/material/Typography"
import AdminEditor from "./AdminEditor"

import { useAdmin } from "../../contexts/admin"

const AdminProfile = () => {
  const { admin } = useAdmin()
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
        {`${admin.first_name || ""} ${admin.last_name || ""}`}
      </Typography>
      <AdminEditor />
    </>
  )
}

export default AdminProfile
