import dynamic from "next/dynamic"

const AdminPage = dynamic(
  () => import("../../features/admin-panel/components/AdminPage"),
  {
    ssr: false,
  }
)

const AdminPanel = () => <AdminPage />

AdminPanel.isProtected = true
AdminPanel.isAdminProtected = true

export default AdminPanel
