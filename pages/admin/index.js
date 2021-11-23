import dynamic from "next/dynamic"

const AdminPage = dynamic(
  () => import("../../features/admin-panel/compnents/AdminPage"),
  {
    ssr: false,
  }
)

export default function AdminPanel() {
  return <AdminPage />
}
