const createFooterLinks = slug => [
  { key: "footer-panel", title: "panel", href: `/${slug}/panel` },
  { key: "footer-add", title: "add memo", href: `/${slug}/add` },
  { key: "footer-home", title: "about", href: `/` },
]

export default createFooterLinks
