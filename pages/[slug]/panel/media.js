import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelMediaPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>Media</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelMediaPage.isProtected = true

export default PanelMediaPage

export const getServerSideProps = fetchUserOrganizationInfo
