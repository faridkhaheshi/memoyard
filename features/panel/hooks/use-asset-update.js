import useAssetCreate from "./use-asset-create"

const useAssetUpdate = ({
  baseApiPath,
  method = "PUT",
  body,
  onSuccess = () => ({}),
}) => useAssetCreate({ baseApiPath, method, body, onSuccess })

export default useAssetUpdate
