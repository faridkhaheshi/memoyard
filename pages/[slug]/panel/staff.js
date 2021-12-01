import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelStaffPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>Staff</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelStaffPage.isProtected = true

export default PanelStaffPage

export const getServerSideProps = fetchUserOrganizationInfo
