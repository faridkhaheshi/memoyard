import { useCallback } from "react"
import useSWR, { mutate } from "swr"
import { usePanelContext } from "../contexts/panel"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.organizationAdmins)

const useOrgAdmins = () => {
  const { slug } = usePanelContext()
  const { data, error } = useSWR(
    slug ? `/api/organization-admins?orgSlug=${slug}` : null,
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
