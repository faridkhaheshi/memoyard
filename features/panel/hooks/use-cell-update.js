import { useCallback } from "react"
import callApi from "../../../utilities/call-api"

const useCellUpdate = baseApiPath => {
  const handleCellUpdate = useCallback(
    async updatedData => {
      try {
        const { id, field, value } = updatedData
        const updateBody = { [field]: value }
        const updatedSubject = await callApi(`${baseApiPath}/${id}`, {
          method: "PUT",
          body: updateBody,
        })
      } catch (err) {
        console.error(err)
      }
    },
    [baseApiPath]
  )

  return handleCellUpdate
}

export default useCellUpdate
