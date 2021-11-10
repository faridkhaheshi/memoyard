const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FILE":
      return [action.payload, ...state]
    default:
      return state
  }
}

export default mediaReducer
