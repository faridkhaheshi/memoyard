import NumberedDashboardRow from "./NumberedDashboardRow"
import { usePanelContext } from "../../contexts/panel"

const ParentsInfo = ({ parentsCount = 0 }) => {
  const { slug } = usePanelContext()
  return (
    <NumberedDashboardRow
      headingNumber={parentsCount}
      headingText="parents"
      description={
        <>
          Your album is secure. Only parents that you specify can view
          photos/videos. And parents can only view the photos/videos related to
          their kids.
        </>
      }
      linkText="Manage Parents"
      href={`/${slug}/panel/kids`}
    />
  )
}

export default ParentsInfo
