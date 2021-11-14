import { useState, useCallback, useEffect } from "react"

import MediaTagSelector from "../../../../components/MediaCard/MediaTagSelector"

const GeneralTagSelector = ({
  isActive,
  setIsActive,
  tags,
  tagsLoading,
  tagsError,
  onTagToggled,
}) => {
  const [selectedTags, setSelectedTags] = useState([])

  const toggleSelectedGeneralTag = useCallback(
    tagId => {
      setSelectedTags(oldTags => {
        const newTags =
          oldTags.indexOf(tagId) > -1
            ? oldTags.filter(tId => tId !== tagId)
            : [...oldTags, tagId]
        onTagToggled({
          tagId,
          add: oldTags.indexOf(tagId) === -1,
          selectedTags: newTags,
          resetAll: !isActive,
        })
        return newTags
      })
      setIsActive(true)
    },
    [setSelectedTags, setIsActive, onTagToggled, isActive]
  )

  useEffect(() => {
    if (!isActive) setSelectedTags([])
  }, [isActive, setSelectedTags])

  return (
    <MediaTagSelector
      disabled={!isActive}
      title={
        isActive
          ? `Apply "recipient tags" to all items:`
          : `Apply "recipient tags" to all items (click on a tag to use):`
      }
      selectedTags={selectedTags}
      tags={tags}
      tagsLoading={tagsLoading}
      tagsError={tagsError}
      onToggle={toggleSelectedGeneralTag}
    />
  )
}

export default GeneralTagSelector
