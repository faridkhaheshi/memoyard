const logout = async authContext => {
  authContext.logOut("", true, true)
}

export default logout
