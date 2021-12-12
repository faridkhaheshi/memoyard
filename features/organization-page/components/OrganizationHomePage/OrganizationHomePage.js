import { NextSeo } from "next-seo"
import Box from "@mui/material/Box"
import OrganizationHomeLoading from "../OrganizationHomeLoading"
import OrganizationFooter from "../OrganizationFooter"
import OrganizationContactCard from "../OrganizationContactCard/OrganizationContactCard"

const OrganizationHomePage = ({ organization, loading = false }) => {
  if (loading) return <OrganizationHomeLoading />

  return (
    <Box
      sx={{
        height: "100%",
        flex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
      }}
    >
      <NextSeo title={organization.name} />
      <OrganizationContactCard organization={organization} />
      <OrganizationFooter slug={organization.slug} />
    </Box>
  )
}

export default OrganizationHomePage
