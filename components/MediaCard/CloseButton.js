import styles from "./CloseButton.module.scss"

const CloseButton = ({ onClick }) => (
  <a
    href="#"
    className={styles.closeButton}
    tabIndex="0"
    role="button"
    onClick={onClick}
  >
    close
  </a>
)

export default CloseButton
