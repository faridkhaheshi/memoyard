import { useReducer } from "react"
import FullPageCentered from "../../../../components/FullPageCentered"
import AddButton from "../AddButton"
import Gallery from "../Gellery"
import mediaReducer from "./media-reducer"

import styles from "./AddMediaPage.module.scss"

const AddMediaPage = ({ organization }) => {
  const [files, dispatch] = useReducer(mediaReducer, [])

  return (
    <FullPageCentered>
      <p>
        Add new photos to <strong>{organization.name}</strong>
      </p>
      <Gallery files={files} />
      <AddButton dispatch={dispatch} />
    </FullPageCentered>
  )
}

export default AddMediaPage
