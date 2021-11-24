import callApi from "../../../../../utilities/call-api"

const login = async (authContext, { username, password }) => {
  const { token } = await callApi("/api/auth/login", {
    method: "POST",
    body: { email: username, password },
  })
  authContext.logIn(token, "", true)
}

export default login
