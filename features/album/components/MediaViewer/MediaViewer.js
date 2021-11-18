import { MemoImage, MemoVideo } from "../../../../components"

import styles from "./MediaViewer.module.scss"

const MediaViewer = ({ src, alt, type, fileType, mediaExId, createdAt }) => {
  return (
    <div className={styles.albumCard}>
      {type === "photo" ? (
        <MemoImage src={src} alt={alt} fileType={fileType} />
      ) : (
        <MemoVideo src={src} fileType={fileType} />
      )}
    </div>
  )
}

export default MediaViewer
