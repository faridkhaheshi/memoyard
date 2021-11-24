import Cookies from "js-cookie"
import config from "../../config"
const { cookieOptions, env } = config

const saveToken = token => {
  if (env === "production") return Cookies.set("token", token, cookieOptions)
  return Cookies.set("token", token)
}

export default saveToken
