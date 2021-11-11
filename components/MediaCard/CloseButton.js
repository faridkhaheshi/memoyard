const CloseButton = ({ onClick, styles }) => (
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
