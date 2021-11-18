import AlbumsViewer from "../../features/album/components/AlbumsViewer"
import fetchUserMedia from "../../features/album/server-side-logic/fetch-user-media"

export default function AlbumsPage({ media, organization }) {
  return <AlbumsViewer media={media} organization={organization} />
}

export const getServerSideProps = fetchUserMedia
