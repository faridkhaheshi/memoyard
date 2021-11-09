import FullPageCentered from "../../../../components/FullPageCentered"
import AddButton from "../AddButton"
import styles from "./AddMediaPage.module.scss"

const AddMediaPage = ({ organization }) => (
  <FullPageCentered>
    <p>
      Add new photos to <strong>{organization.name}</strong>
    </p>
    <AddButton />
  </FullPageCentered>
)

export default AddMediaPage
