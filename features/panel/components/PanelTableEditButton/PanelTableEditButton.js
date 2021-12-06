import MemoNextLink from "../../../../components/MemoNextLink"
import { usePanelContext } from "../../contexts"

const PanelTableEditButton = ({ resourceName, id, text = "Edit" }) => {
  const { slug } = usePanelContext()
  return (
    <MemoNextLink href={`/${slug}/panel/${resourceName}/${id}`}>
      {text}
    </MemoNextLink>
  )
}

export default PanelTableEditButton
