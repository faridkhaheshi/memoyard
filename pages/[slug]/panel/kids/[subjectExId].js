import SubjectProfile from "../../../../features/panel/components/SubjectProfile"
import { SubjectContextProvider } from "../../../../features/panel/contexts/subject"

const PanelKidPage = () => {
  return (
    <SubjectContextProvider>
      <SubjectProfile />
    </SubjectContextProvider>
  )
}

PanelKidPage.isPanelPage = true
PanelKidPage.isProtected = true

export default PanelKidPage
