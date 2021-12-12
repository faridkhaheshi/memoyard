import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

const FixedAspectRatioPaper = ({
  children,
  sx = {},
  width = "100%",
  maxWidth = "100vw",
  minWidth = "250px",
  heightToWidthRatio = "100%",
  ...otherProps
}) => (
  <Box sx={{ width, maxWidth, minWidth }}>
    <Box
      sx={{
        width: "100%",
        paddingTop: heightToWidthRatio,
        height: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Paper
          {...otherProps}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            ...sx,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  </Box>
)

export default FixedAspectRatioPaper
