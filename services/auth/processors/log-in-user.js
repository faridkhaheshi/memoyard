import jwt from "jsonwebtoken"

const jwtSecret = process.env.JWT_SECRET

const defaultOptions = { expiresIn: "60 days", issuer: "memoyard.com" }

const logInUser = async (user, options = defaultOptions) =>
  new Promise((resolve, reject) =>
    jwt.sign(user, jwtSecret, options, (err, token) => {
      if (err)
        reject(
          new Error("Error happened when trying to generate a token for user")
        )
      else resolve(token)
    })
  )

export default logInUser
