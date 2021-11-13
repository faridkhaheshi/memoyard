import Masonry from "react-masonry-css"
import MediaCard from "../../../../components/MediaCard"
import config from "../../../../config"

import styles from "./Gallery.module.scss"

const {
  gallery: { breakpointCols },
} = config

const Gallery = ({ files, tags, dispatch, disableGeneralSelector }) => (
  <Masonry
    breakpointCols={breakpointCols}
    className={styles.masonryGrid}
    columnClassName={styles.masonryGridColumn}
  >
    {files.map(file => (
      <MediaCard
        key={file.objectUrl}
        file={file}
        tags={tags}
        dispatch={dispatch}
        disableGeneralSelector={disableGeneralSelector}
      />
    ))}
  </Masonry>
)

export default Gallery
