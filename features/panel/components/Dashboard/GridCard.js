import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

const StyledPapar = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}))

const GridCard = ({ children, ...otherProps }) => (
  <Grid item {...otherProps}>
    <StyledPapar elevation={4} sx={{ height: "100%" }}>
      {children}
    </StyledPapar>
  </Grid>
)

export default GridCard
