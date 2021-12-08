import NumberedDashboardRow from "./NumberedDashboardRow"
import { usePanelContext } from "../../contexts/panel"

const TeachersInfo = () => {
  const { slug } = usePanelContext()
  return (
    <NumberedDashboardRow
      headingNumber={12}
      headingText="teachers"
      description={
        <>
          In addition to you, teachers are the only ones who can post
          photos/videos. You can assign teachers to classes. Each teacher can
          only post to the classes you specify here.
        </>
      }
      linkText="Manage Teachers"
      href={`/${slug}/panel/teachers`}
    />
  )
}

export default TeachersInfo
