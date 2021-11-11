import Masonry from "react-masonry-css"
import MediaCard from "../../../../components/MediaCard"
import config from "../../../../config"

import styles from "./Gallery.module.scss"

const {
  gallery: { breakpointCols },
} = config

const Gallery = ({ files, dispatch }) => {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {files.map(file => (
        <MediaCard
          key={file.objectUrl}
          file={file}
          onClose={dispatch.bind(null, {
            type: "REMOVE_FILE",
            payload: file.objectUrl,
          })}
        />
      ))}
    </Masonry>
  )
}

export default Gallery
