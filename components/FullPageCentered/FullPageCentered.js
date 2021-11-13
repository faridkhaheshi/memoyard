import styles from "./FullPageCentered.module.scss"

const FullPageCentered = ({ children, bgColor, maxWidth = false }) => (
  <div
    className={
      maxWidth
        ? `${styles.maxWidth} ${styles.fullPageContainer}`
        : styles.fullPageContainer
    }
    style={{ backgroundColor: bgColor in styles ? styles[bgColor] : bgColor }}
  >
    {children}
  </div>
)

export default FullPageCentered
