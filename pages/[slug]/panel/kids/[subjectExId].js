import PanelLayout from "../../../../features/panel/components/PanelLayout"
import SubjectProfile from "../../../../features/panel/components/SubjectProfile"
import { SubjectContextProvider } from "../../../../features/panel/contexts/subject"

const PanelKidPage = () => {
  return (
    <SubjectContextProvider>
      <PanelLayout>
        <SubjectProfile />
      </PanelLayout>
    </SubjectContextProvider>
  )
}

export default PanelKidPage
