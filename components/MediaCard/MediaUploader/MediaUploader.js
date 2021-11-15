import useMediaUploader from "../../../hooks/use-media-uploader"

import styles from "./MediaUploader.module.scss"

const MediaUploader = ({ file }) => {
  const { status, progress, errorMessage } = useMediaUploader(file)
  return <div>{`${status} | ${progress}`}</div>
}

export default MediaUploader
