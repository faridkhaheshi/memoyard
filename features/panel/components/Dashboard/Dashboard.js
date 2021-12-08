import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import GridCard from "./GridCard"
import AlbumInfo from "./AlbumInfo"
import KidsInfo from "./KidsInfo"
import ParentsInfo from "./ParentsInfo"
import ClassesInfo from "./ClassesInfo"
import TeachersInfo from "./TeachersInfo"
import AddMemo from "./AddMemo"

const Dashboard = () => {
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
          <KidsInfo />
        </GridCard>
        <GridCard xs={12} md={6}>
          <ParentsInfo />
        </GridCard>
        <GridCard xs={12} md={6}>
          <ClassesInfo />
        </GridCard>
        <GridCard xs={12} md={6}>
          <TeachersInfo />
        </GridCard>
      </Grid>
    </Box>
  )
}

export default Dashboard
