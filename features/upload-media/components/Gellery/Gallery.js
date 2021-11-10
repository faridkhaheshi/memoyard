import styles from "./Gallery.module.scss"

const Gallery = ({ files }) => {
  return <pre>{JSON.stringify(files, null, 2)}</pre>
}

export default Gallery
