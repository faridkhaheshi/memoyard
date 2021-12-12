import { useAlbums } from "../../contexts"
import Typography from "@mui/material/Typography"
import MemoNextLink from "../../../../components/MemoNextLink"
import styles from "./AlbumHeader.module.scss"

const AlbumHeader = () => {
  const { organization } = useAlbums()
  return (
    <header className={styles.albumHeaderContainer}>
      <Typography
        className={styles.title}
        variant="h6"
        component="h1"
        sx={{
          "& a": {
            color: "inherit",
            textDecoration: "none",
            "&:hover": { textDecoration: "none" },
          },
        }}
      >
        <MemoNextLink href={`/${organization.slug}`}>
          {organization?.name}
        </MemoNextLink>
      </Typography>
      <small className={styles.subtitle}>Album</small>
    </header>
  )
}

export default AlbumHeader
