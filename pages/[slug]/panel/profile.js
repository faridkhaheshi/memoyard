import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelProfilePage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>Profile</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelProfilePage.isProtected = true

export default PanelProfilePage

export const getServerSideProps = fetchUserOrganizationInfo
