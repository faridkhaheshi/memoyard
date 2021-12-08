import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import MemoNextLink from "../../../../components/MemoNextLink"
import Button from "@mui/material/Button"
import { usePanelContext } from "../../contexts/panel"
import useCopyToClipboard from "../../../../hooks/use-copy-to-clipboard"

const AlbumInfo = () => {
  const { slug } = usePanelContext()
  const albumUrl = `https://memoyard.com/${slug}/album`
  const { copy, copied } = useCopyToClipboard(albumUrl)
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          Your Album
        </Typography>
        <Typography gutterBottom color="text.secondary">
          Your photos/videos will be published to this album. Only parents of
          the children can see these. And they only have access to the media
          related to their own kids.
        </Typography>
        <Typography mt={4}>
          <MemoNextLink href={albumUrl} target="_blank">
            {albumUrl}
          </MemoNextLink>
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
      >
        <Button variant="text" color="inherit" onClick={copy} disabled={copied}>
          {!copied ? "Copy Link" : "Copied"}
        </Button>
        <Button
          variant="text"
          href={`/${slug}/album`}
          component={MemoNextLink}
          target="_blank"
        >
          Visit Album
        </Button>
      </CardActions>
    </>
  )
}

export default AlbumInfo
