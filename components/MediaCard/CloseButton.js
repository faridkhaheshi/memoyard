const CloseButton = ({ hide, onClick, styles }) =>
  hide ? null : (
    <button
      className={styles.closeButton}
      tabIndex="0"
      role="button"
      onClick={onClick}
    >
      <i className="fas fa-times" />
    </button>
  )

export default CloseButton
