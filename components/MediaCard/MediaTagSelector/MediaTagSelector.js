import MediaTag from "./MediaTag"

import styles from "./MediaTagSelector.module.scss"

const MediaTagSelector = ({
  disabled,
  selectedTags,
  tags,
  containerStyle,
  onToggle,
  title,
}) => (
  <div
    className={
      containerStyle
        ? `${containerStyle} ${styles.tagsContainer}`
        : styles.tagsContainer
    }
  >
    {title && <p className={disabled ? styles.disabledTitle : ""}>{title}</p>}
    <ul>
      {tags.map(tag => (
        <MediaTag
          key={tag.id}
          tag={tag}
          selectedTags={selectedTags}
          styles={styles}
          onClick={onToggle.bind(null, tag.id)}
        />
      ))}
    </ul>
  </div>
)

export default MediaTagSelector
