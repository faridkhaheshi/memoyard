import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import { AuthContextProvider } from "../contexts/auth"
import seoConfig from "../next-seo.config"

import createEmotionCache from "../styles/create-emotion-cache"
import theme from "../styles/theme"

import "../styles/globals.scss"

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <AuthContextProvider Component={Component}>
        <DefaultSeo {...seoConfig} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
    </CacheProvider>
  )
}

export default MyApp
