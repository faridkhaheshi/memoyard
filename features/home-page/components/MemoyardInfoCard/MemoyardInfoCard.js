import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import MemoPaper from "../../../../components/MemoPaper"

const MemoyardInfoCard = () => (
  <MemoPaper
    width="50vh"
    component="main"
    title="Memoyard"
    actionText="Let's Talk"
    actionProps={{ href: "mailto:hi@memoyard.com" }}
  >
    Hi
  </MemoPaper>
)

export default MemoyardInfoCard
