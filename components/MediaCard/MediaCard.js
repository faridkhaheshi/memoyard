import CloseButton from "./CloseButton"
import MemoVideo from "./MemoVideo"
import MemoImage from "./MemoImage"
import MediaTagSelector from "./MediaTagSelector"

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
      <MediaTagSelector
        tags={tags}
        selectedTags={file.tags}
        containerStyle={styles.tagsContainer}
        title="This item will be sent to:"
        onToggle={tagId =>
          dispatch({
            type: "TOGGLE_FILE_TAG",
            payload: { fileObjectUrl: file.objectUrl, tagId },
          })
        }
      />
    </div>
  )
}

export default MediaCard
