import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "../../../../components/MemoNextLink"
import HomeIcon from "@mui/icons-material/Home"

const NavBranch = ({ links }) => {
  const {
    query: { slug },
  } = useRouter()
  return (
    <Box mb={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={`/${slug}/panel`}>
          <HomeIcon />
        </Link>
        {links.map(({ type, title, path }) =>
          type === "text" ? (
            <Typography key={title} color="text.primary">
              {title}
            </Typography>
          ) : (
            <Link
              key={title}
              underline="hover"
              color="inherit"
              href={`/${slug}/panel/${path}`}
            >
              {title}
            </Link>
          )
        )}
      </Breadcrumbs>
    </Box>
  )
}

export default NavBranch
