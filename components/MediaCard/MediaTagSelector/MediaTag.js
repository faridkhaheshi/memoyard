const MediaTag = ({ styles, tag, selectedTags = [], onClick }) => (
  <li>
    <button
      className={selectedTags.indexOf(tag.id) > -1 ? styles.active : ""}
      onClick={onClick}
    >
      {tag.name}
    </button>
  </li>
)

export default MediaTag
