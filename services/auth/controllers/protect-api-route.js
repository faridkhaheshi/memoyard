import { verifyToken } from "../processors"
import extractTokenFromRequest from "../utils/extract-token-from-request"

const protectApiRoute = handler => async (req, res) => {
  try {
    const token = extractTokenFromRequest(req)
    if (!token)
      return res.status(401).json({ error: { message: "Not allowed" } })
    const user = await verifyToken(token)
    req.user = user
    return handler(req, res)
  } catch (err) {
    return res.status(401).json({
      error: {
        message: "Not allowed",
      },
    })
  }
}

export default protectApiRoute
