import cs from "classnames"
import styles from "./MemoButton.module.scss"

const MemoButton = ({
  children,
  className,
  withMargins = false,
  large = false,
  transparent = false,
  error,
  ...rest
}) => {
  const classNames = cs(className, styles.memoButton, styles.withError, {
    [styles.large]: large,
    [styles.withMargins]: withMargins,
    [styles.transparent]: transparent,
  })
  return error ? (
    <>
      <button className={classNames} {...rest}>
        {children}
      </button>
      <small className={styles.errorMessage}>{error}</small>
    </>
  ) : (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default MemoButton
