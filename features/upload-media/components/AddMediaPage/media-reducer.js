const mediaReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_FILE":
      console.log("removing...")
      return [...state.filter(f => f.objectUrl !== action.payload)]
    case "ADD_FILE":
      return [action.payload, ...state]
    default:
      return state
  }
}

export default mediaReducer
