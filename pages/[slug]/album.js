import { AlbumsContextProvider } from "../../features/album/contexts"
import AlbumsViewer from "../../features/album/components/AlbumsViewer"
import fetchUserMedia from "../../features/album/server-side-logic/fetch-user-media"

export default function AlbumsPage({ media, organization }) {
  return (
    <AlbumsContextProvider media={media} organization={organization}>
      <AlbumsViewer />
    </AlbumsContextProvider>
  )
}

export const getServerSideProps = fetchUserMedia
