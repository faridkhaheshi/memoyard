export default function userProfileReducer(state, action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        updatedUser: {
          ...state.updatedUser,
          [action.payload.field]: action.payload.value,
        },
      }
    case "update-country":
      return {
        ...state,
        selectedCountryCode: action.payload.code,
        selectedProvinceCode: null,
        updatedUser: {
          ...state.updatedUser,
          country: action.payload.name,
          province: null,
        },
      }
    case "update-province":
      return {
        ...state,
        selectedProvinceCode: action.payload.code,
        updatedUser: {
          ...state.updatedUser,
          province: action.payload.name,
        },
      }
    case "update-city":
      return {
        ...state,
        updatedUser: {
          ...state.updatedUser,
          city: action.payload.name,
        },
      }
    case "update-selected-country-code":
      return { ...state, selectedCountryCode: action.payload }
    case "update-selected-province-code":
      return { ...state, selectedProvinceCode: action.payload }
    default:
      throw state
  }
}
