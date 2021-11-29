import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelParentsPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>Parents</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelParentsPage.isProtected = true

export default PanelParentsPage

export const getServerSideProps = fetchUserOrganizationInfo
