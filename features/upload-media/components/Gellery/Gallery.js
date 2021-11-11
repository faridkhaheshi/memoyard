import Masonry from "react-masonry-css"
import MediaCard from "../../../../components/MediaCard"
import config from "../../../../config"

import styles from "./Gallery.module.scss"

// const staticPhotos = [
//   { objectUrl: "https://picsum.photos/600/500" },
//   { objectUrl: "https://picsum.photos/536/354" },
//   { objectUrl: "https://picsum.photos/seed/picsum/400/600" },
//   { objectUrl: "https://picsum.photos/536/354" },
//   { objectUrl: "https://picsum.photos/seed/picsum/400/600" },
//   { objectUrl: "https://picsum.photos/600/500" },
//   { objectUrl: "https://picsum.photos/seed/picsum/400/600" },
//   { objectUrl: "https://picsum.photos/600/500" },
//   { objectUrl: "https://picsum.photos/536/354" },
//   { objectUrl: "https://picsum.photos/seed/picsum/400/600" },
// ]

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
