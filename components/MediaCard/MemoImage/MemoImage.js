import styles from "./MemoImage.module.scss"

const MemoImage = ({ src, alt = "memoyard image", fileType }) => (
  <img className={styles.image} src={src} alt={alt} />
)

export default MemoImage
