import { useEffect, useState, useCallback } from "react"
import buildHasuraProvider from "ra-data-hasura"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import config from "../../../../config"

const {
  admin: { hasuraGraphUrl },
} = config

const useDataProvider = hasuraToken => {
  const [dataProvider, setDataProvider] = useState(null)

  const buildDataProvider = useCallback(async () => {
    const apolloClient = new ApolloClient({
      uri: hasuraGraphUrl,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${hasuraToken}`,
      },
    })
    const dp = await buildHasuraProvider({ client: apolloClient })
    setDataProvider(() => dp)
  }, [setDataProvider])

  useEffect(() => {
    buildDataProvider()
  }, [buildDataProvider])

  return dataProvider
}

export default useDataProvider
