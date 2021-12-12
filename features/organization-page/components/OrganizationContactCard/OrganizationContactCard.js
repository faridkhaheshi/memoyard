import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import MemoPaper from "../../../../components/MemoPaper"

const OrganizationContactCard = ({ organization }) => (
  <MemoPaper
    component="main"
    bgColor="#9C528B"
    actionText="Visit Album"
    title={organization?.name}
    actionProps={{ href: `/${organization.slug}/album` }}
  >
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        padding: 0,
      }}
    >
      <Typography gutterBottom align="justify">
        Here you can view photos and videos of your child during their time in
        school.
      </Typography>
    </Box>
    <Typography
      variant="caption"
      component="small"
      sx={{ color: "rgba(255,255,255, 0.9)" }}
    >
      * All photos and videos are shared privately. Only parents of the children
      can access them.
    </Typography>
  </MemoPaper>
)

export default OrganizationContactCard
