import styles from "./MemoButton.module.scss"

const MemoButton = ({ children, large = false, ...rest }) => (
  <button
    className={
      large ? `${styles.large} ${styles.memoButton}` : styles.memoButton
    }
    {...rest}
  >
    {children}
  </button>
)

export default MemoButton
