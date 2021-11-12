import CloseButton from "./CloseButton"
import MemoVideo from "./MemoVideo"

import styles from "./MediaCard.module.scss"
import MemoImage from "./MemoImage"

const MediaCard = ({ file, onClose }) => {
  const { mediaType } = file

  return (
    <div className={styles.cardContainer}>
      <CloseButton onClick={onClose} styles={styles} />
      {mediaType === "video" ? (
        <MemoVideo src={file.objectUrl} type={file.type} />
      ) : (
        <MemoImage file={file} />
      )}
    </div>
  )
}

export default MediaCard
