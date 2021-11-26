import { DefaultSeo } from "next-seo"
// import { config } from "@fortawesome/fontawesome-svg-core"
import { AuthContextProvider } from "../contexts/auth"
import seoConfig from "../next-seo.config"

// import "@fortawesome/fontawesome-svg-core/styles.css"
import "../styles/globals.scss"

// config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider Component={Component}>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
