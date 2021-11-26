import dynamic from "next/dynamic"
import FullPageCentered from "../../components/FullPageCentered"
import { useAdminUser } from "../../features/admin-panel/hooks"

const AdminPage = dynamic(
  () => import("../../features/admin-panel/components/AdminPage"),
  {
    ssr: false,
  }
)

const AdminPanel = () => {
  const { hasuraToken, isAdminAuthenticated, refreshAdminUser } = useAdminUser()

  if (isAdminAuthenticated)
    return (
      <AdminPage
        hasuraToken={hasuraToken}
        refreshAdminUser={refreshAdminUser}
      />
    )
  return <FullPageCentered>Loading...</FullPageCentered>
}

AdminPanel.isProtected = true
AdminPanel.isAdminProtected = true

export default AdminPanel
