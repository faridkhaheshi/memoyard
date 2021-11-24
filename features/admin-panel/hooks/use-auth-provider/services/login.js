import callApi from "../../../../../utilities/call-api"
import { saveHasuraToken } from "../utilities"

const login = async (authContext, { username, password }) => {
  const { token } = await callApi("/api/auth/login", {
    method: "POST",
    body: { email: username, password },
  })
  authContext.logIn(token, "", true)
  const { token: hasuraToken } = await callApi("/api/admin/hasura-auth")
  saveHasuraToken(hasuraToken)
}

export default login
