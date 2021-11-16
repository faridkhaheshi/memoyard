import Masonry from "react-masonry-css"
import MediaCard from "../../../../components/MediaCard"
import config from "../../../../config"

import styles from "./Gallery.module.scss"

const {
  gallery: { breakpointCols },
} = config

const Gallery = ({
  files,
  tags,
  tagsLoading,
  tagsError,
  dispatch,
  disableGeneralSelector,
  showControls,
}) => (
  <Masonry
    breakpointCols={
      files.length <= breakpointCols.default ? files.length : breakpointCols
    }
    className={styles.masonryGrid}
    columnClassName={styles.masonryGridColumn}
  >
    {files.map(file => (
      <MediaCard
        key={file.objectUrl}
        file={file}
        tags={tags}
        tagsLoading={tagsLoading}
        tagsError={tagsError}
        dispatch={dispatch}
        disableGeneralSelector={disableGeneralSelector}
        showControls={showControls}
      />
    ))}
  </Masonry>
)

export default Gallery
