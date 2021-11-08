import jwt from "jsonwebtoken"

const jwtSecret = process.env.JWT_SECRET

const verifyToken = async token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) reject(new Error("invalid jwt token"))
      else resolve(decoded)
    })
  })

export default verifyToken
