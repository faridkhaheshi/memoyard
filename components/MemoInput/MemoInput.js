import styles from "./MemoInput.module.scss"

const MemoInput = ({ label, id, ...otherProps }) =>
  label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} {...otherProps} />
    </>
  ) : (
    <input className={styles.input} id={id} {...otherProps} />
  )

export default MemoInput
