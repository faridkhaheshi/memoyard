import { useReducer, useState, useCallback } from "react"
import FullPageCentered from "../../../../components/FullPageCentered"
import Gallery from "../Gellery"
import GeneralTagSelector from "../GeneralTagSelector"
import mediaReducer from "./media-reducer"
import useTags from "../../../../hooks/use-tags"
import UploadButton from "../UploadButton/UploadButton"
import AddButton from "../AddButton"

import MemoNextLink from "../../../../components/MemoNextLink"

const AddMediaPage = ({ organization }) => {
  const [files, dispatch] = useReducer(mediaReducer, [])
  const [isGeneralSelectorActive, setIsGeneralSelectorActive] = useState(false)
  const { tags, tagsLoading, tagsError } = useTags(organization.slug)

  const disableGeneralSelector = useCallback(
    () => setIsGeneralSelectorActive(false),
    [setIsGeneralSelectorActive]
  )

  const showControls = files.every(file => !file.uploadStatus)

  return (
    <FullPageCentered maxWidth>
      <p>
        Add new photos/videos to{" "}
        <MemoNextLink
          href={`/${organization.slug}`}
          sx={{ textDecoration: "none" }}
        >
          <strong>{organization.name}</strong>
        </MemoNextLink>
      </p>
      <GeneralTagSelector
        hide={files.length <= 1 || !showControls}
        isActive={isGeneralSelectorActive}
        setIsActive={setIsGeneralSelectorActive}
        tags={tags}
        tagsLoading={tagsLoading}
        tagsError={tagsError}
        onTagToggled={payload =>
          dispatch({ type: "APPLY_TAG_FOR_ALL", payload })
        }
      />
      <Gallery
        showControls={showControls}
        files={files}
        tags={tags}
        tagsLoading={tagsLoading}
        tagsError={tagsError}
        dispatch={dispatch}
        disableGeneralSelector={disableGeneralSelector}
        organization={organization}
      />
      <UploadButton
        showUploadInfo={!showControls}
        files={files}
        organization={organization}
        tags={tags}
        dispatch={dispatch}
      />
      <AddButton
        showMoreText={files.length > 0}
        dispatch={dispatch}
        hide={!showControls}
      />
    </FullPageCentered>
  )
}

export default AddMediaPage
