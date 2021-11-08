const extractTokenFromRequest = req => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      const tokenInCookie = req.cookies.token
      return tokenInCookie || null
    }
    const authHeaderParts = authHeader.split(" ")
    if (authHeaderParts[0] !== "Bearer") throw new Error("")
    return authHeaderParts[1]
  } catch (err) {
    return null
  }
}

export default extractTokenFromRequest
