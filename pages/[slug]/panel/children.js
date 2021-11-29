import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelChildrenPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>Children</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelChildrenPage.isProtected = true

export default PanelChildrenPage

export const getServerSideProps = fetchUserOrganizationInfo
