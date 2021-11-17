import classes from "classnames"
import styles from "./UploadDoneIcon.module.scss"

const UploadDoneIcon = ({ show = false }) => (
  <i
    className={classes("fas fa-check-circle", styles.doneIcon, {
      [styles.hide]: !show,
    })}
  />
)

export default UploadDoneIcon
