import styles from "./MemoError.module.scss"

const MemoError = ({ errorMessage, style }) =>
  errorMessage ? (
    <small className={styles.errorMessage} style={style}>
      {errorMessage}
    </small>
  ) : null

export default MemoError
