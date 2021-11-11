import CloseButton from "./CloseButton"

import styles from "./MediaCard.module.scss"

const MediaCard = ({ file }) => {
  return (
    <div className={styles.gridCell}>
      <CloseButton onClick={() => console.log("closing")} />
      <img src={file.objectUrl} className={styles.media} />
    </div>
  )
}

export default MediaCard
