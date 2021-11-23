import { useEffect, useState, useCallback } from "react"
import buildHasuraProvider from "ra-data-hasura"
import config from "../../../../config"

const {
  admin: { hasuraGraphUrl },
} = config

const useDataProvider = () => {
  const [dataProvider, setDataProvider] = useState(null)

  const buildDataProvider = useCallback(async () => {
    const dp = await buildHasuraProvider({
      clientOptions: { uri: hasuraGraphUrl },
    })
    setDataProvider(dp)
  }, [setDataProvider])

  useEffect(() => {
    buildDataProvider()
  }, [buildDataProvider])

  return dataProvider
}

export default useDataProvider
