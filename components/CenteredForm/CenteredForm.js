import styles from "./CenteredForm.module.scss"

const CenteredForm = ({ children }) => (
  <main className={styles.centeredFormContainer}>{children}</main>
)

export default CenteredForm
