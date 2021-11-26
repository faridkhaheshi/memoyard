const checkAuth = async hasuraToken => {
  if (!!hasuraToken) return true
  throw new Error("You must log in")
}

export default checkAuth
