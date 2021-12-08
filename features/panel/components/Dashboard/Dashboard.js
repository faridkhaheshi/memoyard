import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import GridCard from "./GridCard"
import AlbumInfo from "./AlbumInfo"
import KidsInfo from "./KidsInfo"
import ParentsInfo from "./ParentsInfo"
import ClassesInfo from "./ClassesInfo"
import TeachersInfo from "./TeachersInfo"
import Typography from "@mui/material/Typography"
import AddMemo from "./AddMemo"
import { usePanelContext } from "../../contexts/panel"
import useOrgStats from "../../hooks/use-org-stats"

const Dashboard = () => {
  const { slug } = usePanelContext()
  const { orgStats, isOrgStatsLoading } = useOrgStats(slug)

  if (isOrgStatsLoading) return <Typography>Loading...</Typography>

  return (
    <Box>
      <Grid container direction="row" spacing={2}>
        <GridCard xs={12}>
          <AlbumInfo />
        </GridCard>
        <GridCard xs={12}>
          <AddMemo />
        </GridCard>
        <GridCard xs={12} md={6}>
          <KidsInfo kidsCount={orgStats.subjects} />
        </GridCard>
        <GridCard xs={12} md={6}>
          <ParentsInfo parentsCount={orgStats.subject_listeners} />
        </GridCard>
        <GridCard xs={12} md={6}>
          <ClassesInfo classesCount={orgStats.groups} />
        </GridCard>
        <GridCard xs={12} md={6}>
          <TeachersInfo teachersCount={orgStats.admins} />
        </GridCard>
      </Grid>
    </Box>
  )
}

export default Dashboard
