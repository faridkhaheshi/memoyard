import useVideoPlayer from "./use-video-player"

import styles from "./MemoVideo.module.scss"
import MemoVideoControllers from "./MemoVideoControllers"

const MemoVideo = ({ src, type, videoPreviewFrameSec = 0.2 }) => {
  const { videoRef, handleOnTimeUpdate, ...videoControllers } = useVideoPlayer()
  return (
    <div className={styles.videoWrapper}>
      <video
        muted
        autoPlay="autoplay"
        loop
        ref={videoRef}
        onTimeUpdate={handleOnTimeUpdate}
      >
        <source src={`${src}#t=${videoPreviewFrameSec}`} type={type} />
        Sorry, your browser doesn$apos;t support embedded videos.
      </video>
      <MemoVideoControllers styles={styles} {...videoControllers} />
    </div>
  )
}

export default MemoVideo
