import { useCallback } from "react"
import useSWR, { mutate } from "swr"
import { getHasuraToken, saveHasuraToken } from "../use-auth-provider/utilities"

const ADMIN_AUTH_URL = "/api/admin/hasura-auth"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => {
      const { token } = res
      if (token) {
        saveHasuraToken(token)
        return token
      }
      throw new Error("not authorized")
    })

const useAdminUser = () => {
  const localHasuraToken = getHasuraToken()
  const { data, error } = useSWR(
    !localHasuraToken ? ADMIN_AUTH_URL : null,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  )

  const refreshAdminUser = useCallback(() => {
    mutate(ADMIN_AUTH_URL)
  }, [])

  return {
    hasuraToken: localHasuraToken || data,
    isHasuraTokenLoading: !localHasuraToken && !error && !data,
    authError: error,
    isAdminAuthenticated: !!localHasuraToken || !!data,
    refreshAdminUser,
  }
}

export default useAdminUser
