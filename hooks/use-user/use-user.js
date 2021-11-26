import { useCallback } from "react"
import useSWR, { mutate } from "swr"
import { getToken } from "../../utilities/cookies"

const AUTH_URL = "/api/auth/me"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.user)

const useUser = (options = {}) => {
  const token = getToken()
  const { data, error } = useSWR(token ? AUTH_URL : null, fetcher, {
    shouldRetryOnError: false,
  })

  const refreshUserInfo = useCallback(() => {
    mutate(AUTH_URL)
  }, [])

  return {
    user: data,
    isUserLoading: !!token && !error && !data,
    authError: error,
    refreshUserInfo,
    token,
    isAuthenticated: !!token && !!data,
  }
}

export default useUser
