import useMediaUploader from "../../../hooks/use-media-uploader"

import styles from "./MediaUploader.module.scss"

const MediaUploader = ({ file, dispatch }) => {
  const { status, progress, errorMessage } = useMediaUploader(file, dispatch)
  return (
    <div
      style={{ width: `${progress * 100}%` }}
      className={styles.progressBar}
    />
  )
}

export default MediaUploader
