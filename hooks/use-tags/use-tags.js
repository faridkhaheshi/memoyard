import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useTags = slug => {
  const { data, error } = useSWR(`/api/organizations/${slug}/tags`, fetcher)

  return {
    tags: data && data.tags ? data.tags : null,
    tagsLoading: !error && !data,
    tagsError: error,
  }
}

export default useTags
