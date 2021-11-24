import { getHasuraToken } from "../utilities"

const checkAuth = async authContext => {
  const token = authContext.getToken()
  const hasuraToken = getHasuraToken()
  if (!!token && !!hasuraToken) return true
  throw new Error("You must log in")
}

export default checkAuth
