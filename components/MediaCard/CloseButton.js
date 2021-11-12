const CloseButton = ({ onClick, styles }) => (
  <button
    className={styles.closeButton}
    tabIndex="0"
    role="button"
    onClick={onClick}
  >
    <i className="fas fa-times"></i>
  </button>
)

export default CloseButton
