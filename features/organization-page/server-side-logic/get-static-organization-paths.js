const getStaticOrganizationPaths = async () => ({
  paths: [{ params: { slug: "fantasy" } }],
  fallback: true,
})

export default getStaticOrganizationPaths
