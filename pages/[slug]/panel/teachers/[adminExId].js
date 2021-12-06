import PanelLayout from "../../../../features/panel/components/PanelLayout"
import AdminProfile from "../../../../features/panel/components/AdminProfile"
import { AdminContextProvider } from "../../../../features/panel/contexts/admin"

const PanelTeacherPage = () => {
  return (
    <AdminContextProvider>
      <PanelLayout>
        <AdminProfile />
      </PanelLayout>
    </AdminContextProvider>
  )
}

export default PanelTeacherPage
