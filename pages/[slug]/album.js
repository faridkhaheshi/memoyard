import { AlbumsContextProvider } from "../../features/album/contexts"
import AlbumsViewer from "../../features/album/components/AlbumsViewer"
import fetchUserMedia from "../../features/album/server-side-logic/fetch-user-media"

const AlbumsPage = ({ media, organization, tags }) => (
  <AlbumsContextProvider media={media} organization={organization} tags={tags}>
    <AlbumsViewer />
  </AlbumsContextProvider>
)

AlbumsPage.isProtected = true

export default AlbumsPage
export const getServerSideProps = fetchUserMedia
