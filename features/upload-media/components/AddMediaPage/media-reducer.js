const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_FILE":
      return [...state.filter(f => f.objectUrl !== action.payload)]
    case "ADD_FILE":
      return [action.payload, ...state]
    case "TOGGLE_FILE_TAG":
      return toggleFileTag(state, action)
    case "TOGGLE_TAG_FOR_ALL":
      return toggleTagForAll(state, action)
    default:
      return state
  }
}

export default mediaReducer

function toggleFileTag(state, action) {
  return state.map(file => {
    if (file.objectUrl !== action.payload.fileObjectUrl) return file
    return toggleTagForFile(action.payload.tagId, file)
  })
}

function toggleTagForAll(state, action) {
  return state.map(file => toggleTagForFile(action.payload, file))
}

function toggleTagForFile(tagId, file) {
  if (file.tags.indexOf(tagId) > -1) {
    return { ...file, tags: file.tags.filter(tId => tId !== tagId) }
  } else {
    return { ...file, tags: [...file.tags, tagId] }
  }
}
