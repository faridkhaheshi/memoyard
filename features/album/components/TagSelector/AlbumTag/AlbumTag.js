import Link from "next/link"
import { useRouter } from "next/router"
import classes from "classnames"
import styles from "./AlbumTag.module.scss"

const AlbumTag = ({ name, type, id }) => {
  const {
    query: { slug, tag: selectedTagId },
  } = useRouter()

  const selected = id === selectedTagId

  return (
    <Link
      href={
        selected ? `/${slug}/album` : `/${slug}/album?tag=${id}&tagType=${type}`
      }
    >
      <a
        className={classes(styles.albumTag, {
          [styles.active]: selected,
        })}
      >
        {name}
      </a>
    </Link>
  )
}

export default AlbumTag
