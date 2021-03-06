import detectMediaType from "../../utilities/detect-media-type"
import isMediaTypeSupported from "../../utilities/is-media-type-supported"

import styles from "./AddButton.module.scss"

const AddButton = ({ hide = false, dispatch, showMoreText = false }) => {
  const addNewFiles = e => {
    const { files } = e.target
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i)
        const mediaType = detectMediaType(file.type)
        if (isMediaTypeSupported(mediaType)) {
          dispatch({
            type: "ADD_FILE",
            payload: {
              nativeFile: file,
              objectUrl: URL.createObjectURL(file),
              name: file.name,
              type: file.type,
              size: file.size,
              mediaType: detectMediaType(file.type),
              tags: [],
              uploadInfo: undefined,
            },
          })
        }
      }
    }
  }

  if (hide) return null

  return (
    <form className={styles.addButtonContainer}>
      {showMoreText && <p>or add more photos/videos</p>}
      <label htmlFor="add-input">+</label>
      <input
        type="file"
        id="add-input"
        accept="image/*, video/*"
        multiple
        onChange={addNewFiles}
      />
    </form>
  )
}

export default AddButton
