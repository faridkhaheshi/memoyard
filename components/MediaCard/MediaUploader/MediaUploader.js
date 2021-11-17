import classes from "classnames"
import useMediaUploader from "../../../hooks/use-media-uploader"

import styles from "./MediaUploader.module.scss"

const MediaUploader = ({ file, dispatch, organization, tags }) => {
  const { status, progress, errorMessage } = useMediaUploader(
    file,
    dispatch,
    organization,
    tags
  )
  return (
    <div
      style={{ width: `${progress * 100}%` }}
      className={classes(styles.progressBar, {
        [styles.success]: status === "UPLOADED",
      })}
    />
  )
}

export default MediaUploader
