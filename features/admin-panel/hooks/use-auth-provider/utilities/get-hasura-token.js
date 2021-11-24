import Cookies from "js-cookie"
import { HASURA_TOKEN_KEY } from "./save-hasura-token"

const getHasuraToken = () => Cookies.get(HASURA_TOKEN_KEY)

export default getHasuraToken
