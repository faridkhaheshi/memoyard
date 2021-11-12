import CloseButton from "./CloseButton"
import MemoVideo from "./MemoVideo"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ file, onClose }) => {
  const { mediaType } = file

  return (
    <div className={styles.cardContainer}>
      <CloseButton onClick={onClose} styles={styles} />
      {mediaType === "video" ? (
        <MemoVideo src={file.objectUrl} type={file.type} />
      ) : (
        <img src={file.objectUrl} className={styles.media} />
      )}
    </div>
  )
}

export default MediaCard
