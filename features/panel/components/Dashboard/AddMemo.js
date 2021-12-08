import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import MemoNextLink from "../../../../components/MemoNextLink"
import { usePanelContext } from "../../contexts/panel"

const AddMemo = () => {
  const { slug } = usePanelContext()
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          Add Photos/Videos
        </Typography>
        <Typography color="text.secondary">
          Use the following button to add photos/videos to your album. Only you
          and the active teachers you specify can post to your album.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", padding: 2 }}
      >
        <IconButton
          color="primary"
          aria-label="add memo"
          href={`/${slug}/add`}
          target="_blank"
          component={MemoNextLink}
        >
          <AddIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
      </CardActions>
    </>
  )
}

export default AddMemo
