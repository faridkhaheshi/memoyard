import { useAuth } from "../../../../contexts/auth"
import createAuthProvider from "./create-auth-provider"

const useAuthProvider = () => {
  const authContext = useAuth()

  return createAuthProvider(authContext)
}

export default useAuthProvider
