import { useContext, createContext, useCallback } from "react"
import { useRouter } from "next/router"

import { saveToken, removeToken } from "../../utilities/cookies"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const router = useRouter()

  const logIn = useCallback(
    (token, ref = "/", doNotForward = false) => {
      saveToken(token)
      if (!doNotForward) {
        window.location.replace(ref)
        router.push(ref)
      }
    },
    [router]
  )

  const logOut = useCallback((ref = "/") => {
    removeToken()
    window.location.replace(ref)
  }, [])

  const authContextValues = {
    logIn,
    logOut,
  }

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
