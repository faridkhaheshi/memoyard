import { removeHasuraToken } from "../utilities"

const logout = async authContext => {
  authContext.logOut("", true)
  removeHasuraToken()
}

export default logout
