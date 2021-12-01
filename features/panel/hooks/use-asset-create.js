import { useCallback, useState } from "react"
import callApi from "../../../utilities/call-api"

const useAssetCreate = ({ baseApiPath, body, onSuccess = () => ({}) }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = useCallback(
    async e => {
      try {
        e.preventDefault()
        setIsLoading(true)
        const resource = await callApi(baseApiPath, {
          method: "POST",
          body,
        })
        onSuccess(resource)
      } catch (err) {
        console.error(err)
        setErrorMessage(err.message || "Failed to add new resource")
      } finally {
        setIsLoading(false)
      }
    },
    [body, baseApiPath, onSuccess]
  )
  return { handleSubmit, errorMessage, isLoading }
}

export default useAssetCreate
