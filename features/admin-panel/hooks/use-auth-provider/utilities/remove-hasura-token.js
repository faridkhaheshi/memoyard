import Cookies from "js-cookie"
import { HASURA_TOKEN_KEY } from "./save-hasura-token"
import config from "../../../../../config"

const { cookieOptions, env } = config

const removeHasuraToken = () => {
  if (env === "production")
    return Cookies.remove(HASURA_TOKEN_KEY, cookieOptions)
  Cookies.remove(HASURA_TOKEN_KEY)
}

export default removeHasuraToken
