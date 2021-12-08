import NumberedDashboardRow from "./NumberedDashboardRow"
import { usePanelContext } from "../../contexts/panel"

const ClassesInfo = ({ classesCount = 0 }) => {
  const { slug } = usePanelContext()
  return (
    <NumberedDashboardRow
      headingNumber={classesCount}
      headingText="classes"
      description={
        <>
          Each kid belongs to a class. In addition to posting media for each
          kid, you can post group photos/videos. Only members of a class can
          view the media posted to that class.
        </>
      }
      linkText="Manage Classes"
      href={`/${slug}/panel/classes`}
    />
  )
}

export default ClassesInfo
