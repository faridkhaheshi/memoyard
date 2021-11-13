import MediaTag from "./MediaTag"

import styles from "./TagSelector.module.scss"

const TagSelector = ({ file, tags, parentStyles, dispatch }) => (
  <div className={`${parentStyles.tagsContainer} ${styles.tagsContainer}`}>
    <p>Will be sent to:</p>
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

export default TagSelector
