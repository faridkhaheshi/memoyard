import { useReducer, useState } from "react"
import FullPageCentered from "../../../../components/FullPageCentered"
import Gallery from "../Gellery"
import GeneralTagSelector from "../GeneralTagSelector"
import mediaReducer from "./media-reducer"
import useTags from "../../../../hooks/use-tags"
import UploadButton from "../UploadButton/UploadButton"
import AddButton from "../AddButton"

import styles from "./AddMediaPage.module.scss"

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
  // {
  //   objectUrl: "https://picsum.photos/seed/pic3/1080/1280",
  //   mediaType: "photo",
  //   tags: [],
  // },
  // {
  //   objectUrl: "https://picsum.photos/seed/picsum4/600/400",
  //   mediaType: "photo",
  //   tags: [],
  // },
  // {
  //   objectUrl: "https://picsum.photos/seed/pic5/800/800",
  //   mediaType: "photo",
  //   tags: [],
  // },
  // {
  //   objectUrl:
  //     "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  //   mediaType: "video",
  //   tags: [],
  // },
  // {
  //   objectUrl: "https://picsum.photos/seed/pic6/2100/3000",
  //   mediaType: "photo",
  //   tags: [],
  // },
  // {
  //   objectUrl: "https://picsum.photos/seed/pic7/1200/800",
  //   mediaType: "photo",
  //   tags: [],
  // },
]

const AddMediaPage = ({ organization }) => {
  const [files, dispatch] = useReducer(mediaReducer, [])
  const [isGeneralSelectorActive, setIsGeneralSelectorActive] = useState(false)
  const { tags, tagsLoading, tagsError } = useTags(organization.slug)
  // console.log(files)
  // console.log(tags)

  const disableGeneralSelector = () => setIsGeneralSelectorActive(false)

  return (
    <FullPageCentered maxWidth>
      <p>
        Add new photos/videos to <strong>{organization.name}</strong>
      </p>
      {files.length > 1 && (
        <GeneralTagSelector
          isActive={isGeneralSelectorActive}
          setIsActive={setIsGeneralSelectorActive}
          tags={tags}
          tagsLoading={tagsLoading}
          tagsError={tagsError}
          onTagToggled={payload =>
            dispatch({ type: "APPLY_TAG_FOR_ALL", payload })
          }
        />
      )}
      <Gallery
        files={files}
        tags={tags}
        tagsLoading={tagsLoading}
        tagsError={tagsError}
        dispatch={dispatch}
        disableGeneralSelector={disableGeneralSelector}
      />
      <UploadButton files={files} organization={organization} tags={tags} />
      <AddButton showMoreText={files.length > 0} dispatch={dispatch} />
    </FullPageCentered>
  )
}

export default AddMediaPage
