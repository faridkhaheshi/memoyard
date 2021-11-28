import { MemoImage, MemoVideo } from "../../../../components"
import MediaController from "./MediaController"
import MediaTags from "./MediaTags/MediaTags"

import styles from "./MediaViewer.module.scss"

const MediaViewer = ({
  src,
  alt,
  type,
  fileType,
  mediaExId,
  createdAt,
  tags,
}) => (
  <div className={styles.albumCard}>
    {type === "photo" ? (
      <MemoImage src={src} alt={alt} fileType={fileType} />
    ) : (
      <MemoVideo src={src} fileType={fileType} />
    )}
    <MediaController date={createdAt} src={src} />
    <MediaTags tags={tags} />
  </div>
)

export default MediaViewer
