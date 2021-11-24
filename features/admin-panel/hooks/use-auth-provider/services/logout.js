const logout = async authContext => {
  authContext.logOut("", true)
  return
}

export default logout
