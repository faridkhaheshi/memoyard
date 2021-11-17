import styles from "./MemoImage.module.scss"

const MemoImage = ({ file }) => (
  <img
    className={styles.image}
    src={file.objectUrl}
    alt={file.name || "memo image"}
  />
)

export default MemoImage
