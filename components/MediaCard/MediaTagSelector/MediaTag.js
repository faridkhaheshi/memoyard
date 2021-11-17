import classes from "classnames"

const MediaTag = ({
  styles,
  tag,
  selectedTags = [],
  onClick,
  disabled = false,
}) => (
  <li>
    <button
      disabled={disabled}
      className={classes({
        [styles.active]: selectedTags.indexOf(tag.id) > -1,
      })}
      onClick={onClick}
    >
      {tag.name}
    </button>
  </li>
)

export default MediaTag
