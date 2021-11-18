import MediaViewer from "../MediaViewer"

import styles from "./AlbumsViewer.module.scss"

const AlbumsViewer = ({ media }) => {
  return (
    <main className={styles.albumContainer}>
      {media.map(m => (
        <MediaViewer
          key={m.ex_id}
          src={m.view_url}
          type={m.media_type}
          fileType={m.file_type}
          mediaExId={m.ex_id}
          createdAt={m.created_at}
        />
      ))}
    </main>
  )
}

export default AlbumsViewer
