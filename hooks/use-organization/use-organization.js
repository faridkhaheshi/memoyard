import { useCallback } from "react"
import useSWR, { mutate } from "swr"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.organization)

const useOrganization = slug => {
  const { data, error } = useSWR(`/api/organizations/${slug}`, fetcher, {
    shouldRetryOnError: false,
  })

  const refreshOrgInfo = useCallback(() => {
    mutate(`/api/organizations/${slug}`)
  }, [slug])

  return {
    organization: data,
    isOrgLoading: !error && !data,
    orgError: error,
    hasOrgInfo: !!data,
    refreshOrgInfo,
  }
}

export default useOrganization
