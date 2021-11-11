import CloseButton from "./CloseButton"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ file, onClose, videoPreviewFrameSec = 0.2 }) => {
  const { mediaType } = file

  return (
    <div className={styles.gridCell}>
      <CloseButton onClick={onClose} styles={styles} />
      {mediaType === "photo" ? (
        <img src={file.objectUrl} className={styles.media} />
      ) : (
        <video controls className={styles.media}>
          <source
            src={`${file.objectUrl}#t=${videoPreviewFrameSec}`}
            type={file.type}
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
      )}
    </div>
  )
}

export default MediaCard
