const checkAuth = async authContext => {
  const token = authContext.getToken()
  if (!!token) return true
  throw new Error("You must log in")
}

export default checkAuth
