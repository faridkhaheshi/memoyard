import CloseButton from "./CloseButton"
import MemoVideo from "./MemoVideo"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ file, onClose }) => {
  const { mediaType } = file

  return (
    <div className={styles.cardContainer}>
      <CloseButton onClick={onClose} styles={styles} />
      {mediaType === "photo" ? (
        <img src={file.objectUrl} className={styles.media} />
      ) : (
        <MemoVideo src={file.objectUrl} type={file.type} />
      )}
    </div>
  )
}

export default MediaCard
