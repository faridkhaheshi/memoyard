import { useState, useCallback, useEffect } from "react"

import MediaTagSelector from "../../../../components/MediaCard/MediaTagSelector"

const GeneralTagSelector = ({ isActive, setIsActive, tags, onTagToggled }) => {
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
      title="Send all items to:"
      selectedTags={selectedTags}
      tags={tags}
      onToggle={toggleSelectedGeneralTag}
    />
  )
}

export default GeneralTagSelector
