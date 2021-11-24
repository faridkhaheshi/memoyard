import { removeHasuraToken } from "../utilities"

const handleAuthError = (authContext, { status }) => {
  if (status === 401 || status === 403) {
    authContext.logOut("", true)
    removeHasuraToken()
  }
  return
}

export default handleAuthError
