import AlbumsViewer from "../../features/album/components/AlbumsViewer"
import fetchUserMedia from "../../features/album/server-side-logic/fetch-user-media"

export default function AlbumsPage({ media }) {
  return <AlbumsViewer media={media} />
}

export const getServerSideProps = fetchUserMedia
