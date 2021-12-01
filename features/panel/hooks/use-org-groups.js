import { useCallback } from "react"
import useSWR, { mutate } from "swr"

const API_BASE_PATH = "/api/groups?orgSlug="

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.groups)

const useOrgGroups = slug => {
  const { data, error } = useSWR(`${API_BASE_PATH}${slug}`, fetcher)

  const regreshGroupInfo = useCallback(() => {
    mutate(`${API_BASE_PATH}${slug}`)
  }, [slug])

  return {
    groups: data,
    regreshGroupInfo,
    isGroupInfoLoading: !error && !data,
    groupsError: error,
    hasGroupsInfo: !!data,
  }
}

export default useOrgGroups
