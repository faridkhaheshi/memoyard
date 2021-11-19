import { useAlbums } from "../../contexts"
import styles from "./AlbumHeader.module.scss"

const AlbumHeader = () => {
  const { organization } = useAlbums()
  console.log(organization)
  return (
    <header className={styles.albumHeaderContainer}>
      <h3 className={styles.title}>{organization?.name}</h3>
      <small className={styles.subtitle}>Album</small>
    </header>
  )
}

export default AlbumHeader
