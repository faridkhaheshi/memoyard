import { DefaultSeo } from "next-seo"
import { AuthContextProvider } from "../contexts/auth"
import seoConfig from "../next-seo.config"

import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
