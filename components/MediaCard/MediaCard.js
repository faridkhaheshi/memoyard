import { useCallback } from "react"
import CloseButton from "./CloseButton"
import MemoVideo from "./MemoVideo"
import MemoImage from "./MemoImage"
import MediaTagSelector from "./MediaTagSelector"

import styles from "./MediaCard.module.scss"

const MediaCard = ({
  file,
  tags,
  tagsLoading,
  tagsError,
  dispatch,
  disableGeneralSelector,
}) => {
  const { mediaType } = file
  const onTagToggled = useCallback(
    tagId => {
      dispatch({
        type: "TOGGLE_FILE_TAG",
        payload: { fileObjectUrl: file.objectUrl, tagId },
      })
      disableGeneralSelector()
    },
    [file.objectUrl, disableGeneralSelector, dispatch]
  )

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
        tagsLoading={tagsLoading}
        tagsError={tagsError}
        selectedTags={file.tags}
        containerStyle={styles.tagsContainer}
        title="This item will be sent to:"
        onToggle={onTagToggled}
      />
    </div>
  )
}

export default MediaCard
