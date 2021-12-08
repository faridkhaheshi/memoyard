import { useCallback } from "react"
import useSWR, { mutate } from "swr"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.organizationStats)

const useOrgStats = slug => {
  const { data, error } = useSWR(`/api/organizations/${slug}/stats`, fetcher)

  const refreshOrgStats = useCallback(() => {
    mutate(`/api/organizations/${slug}/stats`)
  }, [slug])

  return {
    orgStats: data,
    isOrgStatsLoading: !error && !data,
    orgStatsError: error,
    hasOrgStats: !!data,
    refreshOrgStats,
  }
}

export default useOrgStats
