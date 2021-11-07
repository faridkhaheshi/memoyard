import styles from "./FullPageCentered.module.scss"

const FullPageCentered = ({ children, bgColor }) => (
  <div
    className={styles.fullPageContainer}
    style={{ backgroundColor: bgColor in styles ? styles[bgColor] : bgColor }}
  >
    {children}
  </div>
)

export default FullPageCentered
