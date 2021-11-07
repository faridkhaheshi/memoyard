import { DefaultSeo } from "next-seo"
import seoConfig from "../next-seo.config"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
