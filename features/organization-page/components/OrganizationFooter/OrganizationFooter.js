import Box from "@mui/material/Box"
import MemoNextLink from "../../../../components/MemoNextLink"

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
    }}
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
          margin: "0 6px",
        },
        "& span": {
          color: "gray",
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
      <li>
        <MemoNextLink href={`/${slug}/panel`}>panel</MemoNextLink>
      </li>
      <span>|</span>
      <li>
        <MemoNextLink href={`/${slug}/add`}>add memo</MemoNextLink>
      </li>
    </Box>
  </Box>
)

export default OrganizationFooter
