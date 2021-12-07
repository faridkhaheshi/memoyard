import { useCallback } from "react"
import useSWR, { mutate } from "swr"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.organizationAdmins)

const useOrgAdmins = slug => {
  const { data, error } = useSWR(
    `/api/organization-admins?orgSlug=${slug}`,
    fetcher
  )

  const refreshAdminsInfo = useCallback(() => {
    mutate(`/api/organization-admins?orgSlug=${slug}`)
  }, [slug])

  return {
    admins: data,
    isAdminInfoLoading: !error && !data,
    adminsError: error,
    hasAdminInfo: !!data,
    refreshAdminsInfo,
  }
}

export default useOrgAdmins
