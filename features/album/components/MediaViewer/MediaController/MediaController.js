import styles from "./MediaController.module.scss"

const MediaController = ({ src, date }) => (
  <div className={styles.mediaControlContainer}>
    <small className={styles.mediaDate}>
      {new Date(date).toLocaleDateString("en-CA", {
        weekday: "long",
        month: "short",
        day: "numeric",
      })}
    </small>
    <i className="fas fa-download"></i>
  </div>
)

export default MediaController
