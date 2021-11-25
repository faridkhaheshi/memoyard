import Cookies from "js-cookie"
import config from "../../../../../config"

const { cookieOptions, env } = config

export const HASURA_TOKEN_KEY = "h-token"

const saveHasuraToken = hasuraToken => {
  if (env === "production")
    return Cookies.set(HASURA_TOKEN_KEY, hasuraToken, cookieOptions)
  return Cookies.set(HASURA_TOKEN_KEY, hasuraToken)
}

export default saveHasuraToken
