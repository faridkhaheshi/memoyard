import { useState, useCallback } from "react"

import MediaTagSelector from "../../../../components/MediaCard/MediaTagSelector"

const GeneralTagSelector = ({ tags, onTagToggled }) => {
  const [isActive, setIsActive] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])

  const toggleSelectedGeneralTag = useCallback(
    tagId => {
      setSelectedTags(oldTags => {
        if (oldTags.indexOf(tagId) > -1) {
          return oldTags.filter(tId => tId !== tagId)
        }
        return [...oldTags, tagId]
      })
      setIsActive(true)
      onTagToggled(tagId)
    },
    [setSelectedTags, setIsActive, onTagToggled]
  )

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
