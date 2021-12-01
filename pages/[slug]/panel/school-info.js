import { PanelLayout, fetchUserOrganizationInfo } from "../../../features/panel"

const PanelShoolInfoPage = ({ organization }) => (
  <PanelLayout organization={organization}>
    <h1>School Info</h1>
    <p>Will be available soon</p>
  </PanelLayout>
)

PanelShoolInfoPage.isProtected = true

export default PanelShoolInfoPage

export const getServerSideProps = fetchUserOrganizationInfo
