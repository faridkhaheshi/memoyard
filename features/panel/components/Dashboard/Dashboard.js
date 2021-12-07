import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import GridCard from "./GridCard"
import AlbumInfo from "./AlbumInfo/AlbumInfo"

const Dashboard = () => {
  return (
    <Box>
      <Grid container direction="row" spacing={1}>
        <GridCard xs={12}>
          <AlbumInfo />
        </GridCard>
        <GridCard xs={12} md={4}>
          Hi
        </GridCard>
      </Grid>
    </Box>
  )
}

export default Dashboard
