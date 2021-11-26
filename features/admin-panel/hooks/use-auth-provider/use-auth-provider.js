import { useAuth } from "../../../../contexts/auth"
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin"
import { login, logout, checkAuth, handleAuthError } from "./services"

const useAuthProvider = (hasuraToken, refreshAdminUser) => {
  const authContext = useAuth()

  return (type, params) => {
    if (type === AUTH_LOGIN) {
      return login(authContext, params)
    }
    if (type === AUTH_LOGOUT) {
      authContext.logOut("/", true)
    }

    if (type === AUTH_ERROR) {
      return handleAuthError(authContext, params)
    }
    if (type === AUTH_CHECK) {
      return checkAuth(hasuraToken)
    }
    return Promise.reject("Unknown method")
  }
}

export default useAuthProvider
