import { useCallback, useState } from "react"
import callApi from "../../../utilities/call-api"

const useAssetCreate = ({ baseApiPath, body, onSuccess = () => ({}) }) => {
  const handleSubmit = useCallback(async () => {
    try {
      const resource = await callApi(baseApiPath, {
        method: "POST",
        body,
      })
      onSuccess()
    } catch (err) {
      console.error(err)
    }
  }, [body, baseApiPath, onSuccess])
  return { handleSubmit }
}

export default useAssetCreate
