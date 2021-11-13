const MediaTag = ({ styles, tag, fileTags, onClick }) => (
  <li>
    <button
      className={fileTags.indexOf(tag.id) > -1 ? styles.active : ""}
      onClick={onClick}
    >
      {tag.name}
    </button>
  </li>
)

export default MediaTag
