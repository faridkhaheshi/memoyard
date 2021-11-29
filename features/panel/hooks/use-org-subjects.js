import { useCallback } from "react"
import useSWR, { mutate } from "swr"

const fetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.subjects)

const useOrgSubjects = slug => {
  const { data, error } = useSWR(`/api/subjects?orgSlug=${slug}`, fetcher)

  const refreshSubjectsInfo = useCallback(() => {
    mutate(`/api/subjects?orgSlug=${slug}`)
  }, [slug])

  return {
    subjects: data,
    isSubjectInfoLoading: !error && !data,
    subjectsError: error,
    hasSubjectsInfo: !!data,
    refreshSubjectsInfo,
  }
}

export default useOrgSubjects
