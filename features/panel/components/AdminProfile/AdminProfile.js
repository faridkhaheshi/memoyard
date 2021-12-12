import Typography from "@mui/material/Typography"
import AdminEditor from "./AdminEditor"
import NavBranch from "../../../breadcrumbs/components/NavBranch"

import { useAdmin } from "../../contexts/admin"

const AdminProfile = () => {
  const { admin } = useAdmin()
  const title = `${admin.first_name || ""} ${admin.last_name || ""}`
  return (
    <>
      <NavBranch
        links={[
          { type: "link", title: "Teachers", path: "teachers" },
          { type: "text", title },
        ]}
      />
      <Typography variant="h4" component="h1" sx={{ marginBottom: "40px" }}>
        {title}
      </Typography>
      <AdminEditor />
    </>
  )
}

export default AdminProfile
