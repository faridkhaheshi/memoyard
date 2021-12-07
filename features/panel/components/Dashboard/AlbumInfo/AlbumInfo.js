import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import MemoNextLink from "../../../../../components/MemoNextLink"
import Button from "@mui/material/Button"

const AlbumInfo = () => (
  <>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h3">
        Your Album
      </Typography>
      <Typography color="text.secondary">
        Your photos/videos will be published to this album. Only parents of the
        children can see these. And they only have access to the media related
        to their own kids.
      </Typography>
      <MemoNextLink href="https://www.google.com">link</MemoNextLink>
    </CardContent>
    <CardActions
      sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
    >
      <Button variant="text" color="inherit">
        Copy Link
      </Button>
      <Button variant="text">Visit Album</Button>
    </CardActions>
  </>
)

export default AlbumInfo
