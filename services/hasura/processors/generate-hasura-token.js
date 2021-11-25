import { logInUser } from "../../auth/processors"

const hasuraRole = "admin"

const generateHasuraToken = () =>
  logInUser({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [hasuraRole],
      "x-hasura-default-role": hasuraRole,
    },
  })

export default generateHasuraToken
