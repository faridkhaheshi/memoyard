import styles from "./CenteredForm.module.scss"

const CenteredForm = ({ className, children }) => (
  <main
    className={
      className
        ? `${styles.centeredFormContainer} ${className}`
        : styles.centeredFormContainer
    }
  >
    {children}
  </main>
)

export default CenteredForm
