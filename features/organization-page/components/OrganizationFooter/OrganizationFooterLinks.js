import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import MemoNextLink from "../../../../components/MemoNextLink"
import createFooterLinks from "./create-footer-links"

const OrganizationFooterLinks = () => {
  const {
    query: { slug },
  } = useRouter()
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        listStyle: "none",
        paddingLeft: 0,
        padding: 0,
        margin: 0,
        "&>li": {
          "&:not(:last-child)": {
            "&::after": {
              content: '"-"',
              margin: "0 8px",
            },
          },
        },
        "& a": {
          color: "inherit",
          textDecoration: "none",
          "&:hover": {
            color: "black",
          },
        },
      }}
    >
      {createFooterLinks(slug).map(({ key, title, href }) => (
        <li key={key}>
          <MemoNextLink href={href}>{title}</MemoNextLink>
        </li>
      ))}
    </Box>
  )
}

export default OrganizationFooterLinks
