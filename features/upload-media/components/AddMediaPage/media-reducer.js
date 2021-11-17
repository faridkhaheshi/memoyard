/*
const sampleState = [
  {
    nativeFile: 'file',
    objectUrl: 'URL.createObjectURL(file)',
    name: 'file.name',
    type: 'file.type',
    size: 'file.size',
    mediaType: 'video|photo',
    tags: [],
    uploadInfo: undefined | { uploadUrl, viewUrl },
    uploadStatus: undefined | 'READY_TO_UPLOAD' | 'UPLOADING' | 'UPLOADED'
  },
]
*/

const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_FILE":
      return [...state.filter(f => f.objectUrl !== action.payload)]
    case "ADD_FILE":
      return [action.payload, ...state]
    case "TOGGLE_FILE_TAG":
      return toggleFileTag(state, action)
    case "APPLY_TAG_FOR_ALL":
      return applyTagForAll(state, action)
    case "ADD_UPLOAD_URLS":
      return addUploadUrls(state, action)
    case "UPDATE_UPLOAD_STATUS":
      return updateUploadStatus(state, action)
    default:
      return state
  }
}

export default mediaReducer

function updateUploadStatus(state, action) {
  return state.map(file =>
    file.objectUrl !== action.payload.fileObjectUrl
      ? file
      : {
          ...file,
          uploadStatus: action.payload.status,
          mediaExId: action.payload.mediaExId || undefined,
        }
  )
}

function addUploadUrls(state, action) {
  const { payload: uploadUrls } = action
  const fileMap = uploadUrls.reduce(
    (acc, { uploadUrl, viewUrl, fileObjectUrl }) => ({
      ...acc,
      [fileObjectUrl]: { uploadUrl, viewUrl },
    }),
    {}
  )
  const newState = state.map(file => ({
    ...file,
    uploadInfo: fileMap[file.objectUrl],
  }))
  return newState
}

function toggleFileTag(state, action) {
  return state.map(file => {
    if (file.objectUrl !== action.payload.fileObjectUrl) return file
    return toggleTagForFile(action.payload.tagId, file)
  })
}

function applyTagForAll(state, action) {
  const {
    payload: { add, tagId, selectedTags, resetAll },
  } = action
  if (resetAll) {
    return state.map(file => ({ ...file, tags: selectedTags }))
  }
  return state.map(file => {
    const tagExistsForFile = file.tags.indexOf(tagId) > -1
    if (tagExistsForFile && add) {
      return file
    } else if (tagExistsForFile) {
      return { ...file, tags: file.tags.filter(tId => tId !== tagId) }
    } else if (add) {
      return { ...file, tags: [...file.tags, tagId] }
    } else {
      return file
    }
  })
}

function toggleTagForFile(tagId, file) {
  if (file.tags.indexOf(tagId) > -1) {
    return { ...file, tags: file.tags.filter(tId => tId !== tagId) }
  } else {
    return { ...file, tags: [...file.tags, tagId] }
  }
}
