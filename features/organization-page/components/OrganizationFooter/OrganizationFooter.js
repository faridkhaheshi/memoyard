import Box from "@mui/material/Box"
import MemoNextLink from "../../../../components/MemoNextLink"
import createFooterLinks from "./create-footer-links"

const OrganizationFooter = ({ slug }) => (
  <Box
    sx={{
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    }}
    component="footer"
  >
    <Box
      component="ul"
      sx={{
        display: "flex",
        listStyle: "none",
        paddingLeft: 0,
        padding: 1,
        margin: 0,
        "&>li": {
          "&:not(:last-child)": {
            "&::after": {
              content: '"|"',
              margin: "0 8px",
              color: "gray",
            },
          },
        },
        "& a": {
          textDecoration: "none",
          color: "gray",
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
  </Box>
)

export default OrganizationFooter
