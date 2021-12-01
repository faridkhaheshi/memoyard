import Router from "next/router"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import NProgress from "nprogress"

import { AuthContextProvider } from "../contexts/auth"

import seoConfig from "../next-seo.config"

import createEmotionCache from "../styles/create-emotion-cache"
import theme from "../styles/theme"

import "../styles/globals.scss"
import "nprogress/nprogress.css"

const clientSideEmotionCache = createEmotionCache()

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

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
