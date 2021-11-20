import classes from "classnames"
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
    <a href={src} download rel="noreferrer">
      <i className={classes("fas fa-download", styles.downloadButton)} />
    </a>
  </div>
)

export default MediaController
