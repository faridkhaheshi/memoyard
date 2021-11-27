import { AlbumsContextProvider } from "../../features/album/contexts"
import AlbumsViewer from "../../features/album/components/AlbumsViewer"
import fetchUserMedia from "../../features/album/server-side-logic/fetch-user-media"

export default function AlbumsPage({ media, organization, tags }) {
  // console.log(media)
  // console.log(organization)
  // console.log(tags)
  return (
    <AlbumsContextProvider
      media={media}
      organization={organization}
      tags={tags}
    >
      <AlbumsViewer />
    </AlbumsContextProvider>
  )
}

export const getServerSideProps = fetchUserMedia
