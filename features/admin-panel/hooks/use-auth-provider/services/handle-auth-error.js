const handleAuthError = (authContext, { status }) => {
  if (status === 401 || status === 403) {
    authContext.logOut("", true)
  }
  return
}

export default handleAuthError
