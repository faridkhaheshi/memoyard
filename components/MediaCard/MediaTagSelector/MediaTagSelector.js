import MediaTag from "./MediaTag"

import styles from "./MediaTagSelector.module.scss"

const MediaTagSelector = ({ file, tags, parentStyles, dispatch }) => (
  <div className={`${parentStyles.tagsContainer} ${styles.tagsContainer}`}>
    <p>This item will be sent to:</p>
    <ul>
      {tags.map(tag => (
        <MediaTag
          key={tag.id}
          tag={tag}
          fileTags={file.tags}
          styles={styles}
          onClick={dispatch.bind(null, {
            type: "TOGGLE_FILE_TAG",
            payload: { fileObjectUrl: file.objectUrl, tagId: tag.id },
          })}
        />
      ))}
    </ul>
  </div>
)

export default MediaTagSelector
