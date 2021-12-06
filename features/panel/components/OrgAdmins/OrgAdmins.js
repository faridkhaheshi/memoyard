import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import AdminAdder from "./AdminAdder"
import AdminsTable from "./AdminsTable"
import useOrgAdmins from "../../hooks/use-org-admins"

const OrgAdmins = () => {
  const { admins, isAdminInfoLoading, refreshAdminsInfo } = useOrgAdmins()

  console.log(admins)

  if (isAdminInfoLoading) return <Typography variant="p">Loading...</Typography>

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <AdminsTable admins={admins} />
      <AdminAdder refresh={refreshAdminsInfo} />
    </Box>
  )
}

export default OrgAdmins
