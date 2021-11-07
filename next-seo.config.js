import config from "./config"

const { baseUrl } = config
const siteName = "Memoyard"
const title = "Memoyard | photo sharing for daycares"
const description =
  "Memoyard enables daycares to share memories of children with their parents"

const nextSeoConfig = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    images: [
      {
        url: `${baseUrl}/images/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "memoyard",
      },
    ],
    url: baseUrl,
    site_name: siteName,
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: `${baseUrl}/favicon.ico`,
    },
    {
      rel: "apple-touch-icon",
      href: `${baseUrl}/images/apple-touch-icon.png`,
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  canonical: baseUrl + "/",
  noindex: false,
  nofollow: false,
}

export default nextSeoConfig
