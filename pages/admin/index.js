import dynamic from "next/dynamic"

const AdminPage = dynamic(
  () => import("../../features/admin-panel/components/AdminPage"),
  {
    ssr: false,
  }
)

export default function AdminPanel() {
  return <AdminPage />
}
