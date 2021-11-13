import CloseButton from "./CloseButton"
import MemoVideo from "./MemoVideo"
import MemoImage from "./MemoImage"
import TagSelector from "./TagSelector/TagSelector"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ file, tags, dispatch }) => {
  const { mediaType } = file

  return (
    <div className={styles.cardContainer}>
      <CloseButton
        onClick={() =>
          dispatch({ type: "REMOVE_FILE", payload: file.objectUrl })
        }
        styles={styles}
      />
      {mediaType === "video" ? (
        <MemoVideo src={file.objectUrl} type={file.type} />
      ) : (
        <MemoImage file={file} />
      )}
      <TagSelector
        tags={tags}
        file={file}
        parentStyles={styles}
        dispatch={dispatch}
      />
    </div>
  )
}

export default MediaCard
