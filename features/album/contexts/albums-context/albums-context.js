import { useContext, createContext } from "react"

const AlbumsContext = createContext()
export const useAlbums = () => useContext(AlbumsContext)

export const AlbumsContextProvider = ({ children, organization, media }) => {
  const albumsContextValues = {
    organization,
    media,
  }

  return (
    <AlbumsContext.Provider value={albumsContextValues}>
      {children}
    </AlbumsContext.Provider>
  )
}

export default AlbumsContext
