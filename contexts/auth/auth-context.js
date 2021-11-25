import { useContext, createContext, useCallback } from "react"
import { useRouter } from "next/router"
import FullPageCentered from "../../components/FullPageCentered"

import { saveToken, removeToken, getToken } from "../../utilities/cookies"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ Component, children }) => {
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

  const logOut = useCallback((ref = "/", doNotForward = false) => {
    removeToken()
    if (!doNotForward) window.location.replace(ref)
  }, [])

  const authContextValues = {
    logIn,
    logOut,
    getToken,
  }

  console.log(Component.isProtected)
  console.log(Component.isAdminProtected)

  return <FullPageCentered>Loading...</FullPageCentered>

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
