import NumberedDashboardRow from "./NumberedDashboardRow"
import { usePanelContext } from "../../contexts/panel"

const KidsInfo = ({ kidsCount = 0 }) => {
  const { slug } = usePanelContext()
  return (
    <NumberedDashboardRow
      headingNumber={kidsCount}
      headingText="kids"
      description={
        <>
          When you send a photo/video for a kid, only parents of that kid has
          access to that photo/video.
        </>
      }
      linkText="Manage Kids"
      href={`/${slug}/panel/kids`}
    />
  )
}

export default KidsInfo
