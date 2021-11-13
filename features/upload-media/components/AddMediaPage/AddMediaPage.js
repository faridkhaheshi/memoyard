import { useReducer } from "react"
import FullPageCentered from "../../../../components/FullPageCentered"
import AddButton from "../AddButton"
import Gallery from "../Gellery"
import mediaReducer from "./media-reducer"

import styles from "./AddMediaPage.module.scss"

const tags = [
  { name: "Tara", type: "subject", id: "1" },
  { name: "toddlers", type: "group", id: "2" },
  { name: "Shila", type: "subject", id: "3" },
  { name: "all", type: "group", id: "4" },
]

const staticFiles = [
  {
    objectUrl: "https://picsum.photos/seed/pic1/200/300",
    mediaType: "photo",
    tags: [],
  },
  {
    objectUrl: "https://picsum.photos/seed/pic2/1280/1080",
    mediaType: "photo",
    tags: [],
  },
  {
    objectUrl:
      "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
    mediaType: "video",
    tags: [],
  },
  {
    objectUrl: "https://picsum.photos/seed/pic3/1080/1280",
    mediaType: "photo",
    tags: [],
  },
  {
    objectUrl: "https://picsum.photos/seed/picsum4/600/400",
    mediaType: "photo",
    tags: [],
  },
  {
    objectUrl: "https://picsum.photos/seed/pic5/800/800",
    mediaType: "photo",
    tags: [],
  },
  {
    objectUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    mediaType: "video",
    tags: [],
  },
  {
    objectUrl: "https://picsum.photos/seed/pic6/2100/3000",
    mediaType: "photo",
    tags: [],
  },
  {
    objectUrl: "https://picsum.photos/seed/pic7/1200/800",
    mediaType: "photo",
    tags: [],
  },
]

const AddMediaPage = ({ organization }) => {
  const [files, dispatch] = useReducer(mediaReducer, staticFiles)

  return (
    <FullPageCentered>
      <p>
        Add new photos to <strong>{organization.name}</strong>
      </p>
      <Gallery files={files} tags={tags} dispatch={dispatch} />
      <AddButton dispatch={dispatch} />
    </FullPageCentered>
  )
}

export default AddMediaPage
