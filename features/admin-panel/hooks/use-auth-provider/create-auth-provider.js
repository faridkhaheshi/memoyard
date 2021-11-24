import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin"
import { login } from "./services"

const createAuthProvider = authContext => (type, params) => {
  if (type === AUTH_LOGIN) {
    return login(authContext, params)
  }
  if (type === AUTH_LOGOUT) {
    // localStorage.removeItem("username")
    return Promise.resolve()
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params
    if (status === 401 || status === 403) {
      // localStorage.removeItem("username")
      return Promise.reject()
    }
    return Promise.resolve()
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem("adminToken")
      ? Promise.resolve()
      : Promise.reject()
  }
  return Promise.reject("Unknown method")
}

export default createAuthProvider
