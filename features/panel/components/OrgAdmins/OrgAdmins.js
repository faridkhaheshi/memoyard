import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import AdminAdder from "./AdminAdder"
import AdminsTable from "./AdminsTable"
import useOrgAdmins from "../../hooks/use-org-admins"
import { usePanelContext } from "../../contexts/panel"

const OrgAdmins = () => {
  const { slug } = usePanelContext()
  const { admins, isAdminInfoLoading, refreshAdminsInfo } = useOrgAdmins(slug)

  if (isAdminInfoLoading) return <Typography variant="p">Loading...</Typography>

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <AdminsTable admins={admins} />
      <AdminAdder refresh={refreshAdminsInfo} sx={{ marginTop: 2 }} />
    </Box>
  )
}

export default OrgAdmins
