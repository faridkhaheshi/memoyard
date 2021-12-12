import AdminProfile from "../../../../features/panel/components/AdminProfile"
import { AdminContextProvider } from "../../../../features/panel/contexts/admin"

const PanelTeacherPage = () => {
  return (
    <AdminContextProvider>
      <AdminProfile />
    </AdminContextProvider>
  )
}

PanelTeacherPage.isPanelPage = true
PanelTeacherPage.isProtected = true

export default PanelTeacherPage
