import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin"
import { login, logout, checkAuth, handleAuthError } from "./services"

const createAuthProvider = authContext => (type, params) => {
  if (type === AUTH_LOGIN) {
    return login(authContext, params)
  }
  if (type === AUTH_LOGOUT) {
    return logout(authContext)
  }

  if (type === AUTH_ERROR) {
    return handleAuthError(authContext, params)
  }
  if (type === AUTH_CHECK) {
    return checkAuth(authContext)
  }
  return Promise.reject("Unknown method")
}

export default createAuthProvider
