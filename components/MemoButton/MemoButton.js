import cs from "classnames"
import styles from "./MemoButton.module.scss"

const MemoButton = ({
  children,
  className,
  withMargins = false,
  large = false,
  error,
  ...rest
}) =>
  error ? (
    <>
      <button
        className={cs(className, styles.memoButton, styles.withError, {
          [styles.large]: large,
          [styles.withMargins]: withMargins,
        })}
        {...rest}
      >
        {children}
      </button>
      <small className={styles.errorMessage}>{error}</small>
    </>
  ) : (
    <button
      className={cs(className, styles.memoButton, {
        [styles.large]: large,
        [styles.withMargins]: withMargins,
      })}
      {...rest}
    >
      {children}
    </button>
  )

export default MemoButton
