import Typography from "@mui/material/Typography"
import MemoPaper from "../../../../components/MemoPaper"

const MemoyardInfoCard = () => (
  <MemoPaper
    bgColor="#4E0250"
    width="50vh"
    component="main"
    title="Memoyard"
    actionText="Let's Talk"
    actionProps={{ href: "mailto:hi@memoyard.com" }}
    sx={{
      color: "rgba(255,255,255,0.6)",
      "& strong": { color: "white" },
      "& h6": { color: "white" },
    }}
  >
    <Typography gutterBottom variant="h6">
      What it does?
    </Typography>
    <Typography gutterBottom align="justify" mb={3}>
      We create a <strong>private online album for daycares</strong> so that
      they can <strong>share photos/videos</strong> of children with their
      parents easily.
    </Typography>
    <Typography gutterBottom variant="h6">
      How can I use it for my daycare?
    </Typography>
    <Typography gutterBottom align="justify">
      Currenly, the system is being used by a limited number of daycares. If you
      are interested, please send an email to us.
    </Typography>
  </MemoPaper>
)

export default MemoyardInfoCard
