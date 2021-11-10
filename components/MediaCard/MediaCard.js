import styles from "./MediaCard.module.scss"

const MediaCard = ({ file }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={file.objectUrl} className={styles.media} />
    </div>
  )
}

export default MediaCard
