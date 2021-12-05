import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import AdminAdder from "./AdminAdder"
import AdminsTable from "./AdminsTable"

const OrgAdmins = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <AdminAdder />
      <AdminsTable />
    </Box>
  )
}

export default OrgAdmins
