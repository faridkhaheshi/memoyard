import classes from "classnames"
import styles from "./FullPageCentered.module.scss"

const FullPageCentered = ({ children, bgColor, maxWidth = false }) => (
  <div
    className={classes(styles.fullPageContainer, {
      [styles.maxWidth]: maxWidth,
    })}
    style={{ backgroundColor: bgColor in styles ? styles[bgColor] : bgColor }}
  >
    {children}
  </div>
)

export default FullPageCentered
