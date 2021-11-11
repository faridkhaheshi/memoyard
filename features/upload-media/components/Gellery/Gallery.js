import Masonry from "react-masonry-css"
import MediaCard from "../../../../components/MediaCard"
import config from "../../../../config"

import styles from "./Gallery.module.scss"

const staticFiles = [
  {
    objectUrl: "https://picsum.photos/seed/pic1/200/300",
    mediaType: "photo",
  },
  // {
  //   objectUrl:
  //     "https://vod-progressive.akamaized.net/exp=1636655946~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F547%2F21%2F527735765%2F2481212235.mp4~hmac=630f689063ec35b1423d10fa26620c3bd9c01d881992edaf67e5e24d05b7e518/vimeo-prod-skyfire-std-us/01/547/21/527735765/2481212235.mp4?download=1&filename=pexels-artem-podrez-7233556.mp4",
  //   mediaType: "video",
  // },
  {
    objectUrl: "https://picsum.photos/seed/pic2/1280/1080",
    mediaType: "photo",
  },
  {
    objectUrl:
      "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
    mediaType: "video",
  },
  {
    objectUrl: "https://picsum.photos/seed/pic3/1080/1280",
    mediaType: "photo",
  },
  {
    objectUrl: "https://picsum.photos/seed/picsum4/600/400",
    mediaType: "photo",
  },
  {
    objectUrl: "https://picsum.photos/seed/pic5/800/800",
    mediaType: "photo",
  },
  // {
  //   objectUrl:
  //     "https://vod-progressive.akamaized.net/exp=1636655260~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3446%2F21%2F542231785%2F2571488156.mp4~hmac=67aa04f108d25b67bbd7a112cc4d137845787423d3552d3aba85141644a04c6a/vimeo-prod-skyfire-std-us/01/3446/21/542231785/2571488156.mp4?download=1&filename=pexels-mikhail-nilov-7677686.mp4",
  //   mediaType: "video",
  // },
  {
    objectUrl:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    mediaType: "video",
  },
  // {
  //   objectUrl:
  //     "https://vod-progressive.akamaized.net/exp=1636655390~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F935%2F22%2F554676563%2F2623791800.mp4~hmac=3f5ccd12ad74f5faabe4b89fc82b996f28a8699cc9fd1ec628e05aa8450a1a88/vimeo-prod-skyfire-std-us/01/935/22/554676563/2623791800.mp4?download=1&filename=pexels-anna-nekrashevich-8056091.mp4",
  //   mediaType: "video",
  // },
  {
    objectUrl: "https://picsum.photos/seed/pic6/2100/3000",
    mediaType: "photo",
  },
  {
    objectUrl: "https://picsum.photos/seed/pic7/1200/800",
    mediaType: "photo",
  },
]

const {
  gallery: { breakpointCols },
} = config

const Gallery = ({ files, dispatch }) => {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {staticFiles.map(file => (
        <MediaCard
          key={file.objectUrl}
          file={file}
          onClose={dispatch.bind(null, {
            type: "REMOVE_FILE",
            payload: file.objectUrl,
          })}
        />
      ))}
    </Masonry>
  )
}

export default Gallery
