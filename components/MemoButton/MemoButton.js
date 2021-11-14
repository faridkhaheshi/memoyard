import styles from "./MemoButton.module.scss"

const MemoButton = ({ children, large = false }) => (
  <button
    className={
      large ? `${styles.large} ${styles.memoButton}` : styles.memoButton
    }
  >
    {children}
  </button>
)

export default MemoButton
