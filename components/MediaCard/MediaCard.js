import CloseButton from "./CloseButton"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ file, onClose }) => {
  return (
    <div className={styles.gridCell}>
      <CloseButton onClick={onClose} />
      <img src={file.objectUrl} className={styles.media} />
    </div>
  )
}

export default MediaCard
