import { useAlbums } from "../../contexts"
import AlbumTag from "./AlbumTag"

import styles from "./TagSelector.module.scss"

const TagSelector = () => {
  const { tags } = useAlbums()
  return (
    <div className={styles.tagsCardContainer}>
      <p>Your albums:</p>
      <div className={styles.tags}>
        {tags.map(({ id, name, type }) => (
          <AlbumTag key={id} id={id} name={name} type={type} />
        ))}
      </div>
    </div>
  )
}

export default TagSelector
