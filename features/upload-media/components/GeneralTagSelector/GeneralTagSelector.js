import { useState, useCallback, useEffect } from "react"

import MediaTagSelector from "../../../../components/MediaCard/MediaTagSelector"

const GeneralTagSelector = ({ isActive, setIsActive, tags, onTagToggled }) => {
  const [selectedTags, setSelectedTags] = useState([])

  const toggleSelectedGeneralTag = useCallback(
    tagId => {
      setSelectedTags(oldTags => {
        if (oldTags.indexOf(tagId) > -1) {
          return oldTags.filter(tId => tId !== tagId)
        }
        return [...oldTags, tagId]
      })
      onTagToggled(tagId)
      setIsActive(true)
    },
    [setSelectedTags, setIsActive, onTagToggled]
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
