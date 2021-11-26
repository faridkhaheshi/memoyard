import { useContext, createContext, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import useUser from "../../hooks/use-user"
import FullPageCentered from "../../components/FullPageCentered"

import { saveToken, removeToken, getToken } from "../../utilities/cookies"
import { removeHasuraToken } from "../../features/admin-panel/hooks/use-auth-provider/utilities"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ Component, children }) => {
  const { user, isUserLoading, token, isAuthenticated } = useUser()
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

  const logOut = useCallback((ref = "/", admin = true) => {
    removeToken()
    if (admin) {
      removeHasuraToken()
    }
    window.location.replace(ref)
  }, [])

  const authContextValues = {
    logIn,
    logOut,
    getToken,
    user,
    token,
    isAuthenticated,
    isUserLoading,
  }

  useEffect(() => {
    if (!isAuthenticated && !isUserLoading && Component.isProtected) {
      router.push(
        `/login?ref=${encodeURIComponent(window.location.toString())}`
      )
    }
  }, [isAuthenticated, isUserLoading, Component.isProtected, router])

  if (Component.isProtected && !isAuthenticated)
    return <FullPageCentered>Loading...</FullPageCentered>

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
