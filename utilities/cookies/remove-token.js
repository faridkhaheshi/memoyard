import Cookies from "js-cookie"
import config from "../../config"
const { cookieOptions, env } = config

const removeToken = () => {
  if (env === "production") return Cookies.remove("token", cookieOptions)
  Cookies.remove("token")
}

export default removeToken
