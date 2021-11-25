import Cookies from "js-cookie"

const getToken = () => Cookies.get("token")

export default getToken
