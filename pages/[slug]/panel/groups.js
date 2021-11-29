import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelGroupsPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>Groups</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelGroupsPage.isProtected = true

export default PanelGroupsPage

export const getServerSideProps = fetchUserOrganizationInfo
