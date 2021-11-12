import useVideoPlayer from "./use-video-player"

import styles from "./MemoVideo.module.scss"

const MemoVideo = ({ src, type, videoPreviewFrameSec = 0.2 }) => {
  const {
    videoRef,
    isMute,
    isPlaying,
    videoPlayProgress,
    toggleMute,
    togglePlay,
    handleOnTimeUpdate,
    handleProgressHandleChange,
  } = useVideoPlayer()
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
      <div className={styles.controls}>
        <div className={styles.actions}>
          <button onClick={togglePlay}>
            {isPlaying ? (
              <i className="fas fa-pause" />
            ) : (
              <i className="fas fa-play" />
            )}
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={videoPlayProgress}
          onChange={handleProgressHandleChange}
          className={styles.progressBar}
        />
        <button className={styles.muteButton} onClick={toggleMute}>
          {isMute ? (
            <i className="fas fa-volume-up" />
          ) : (
            <i className="fas fa-volume-mute" />
          )}
        </button>
      </div>
    </div>
  )
}

export default MemoVideo
