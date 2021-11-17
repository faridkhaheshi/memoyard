import MemoVideoMuteButton from "./MemoVideoMuteButton"
import MemoVideoPlayButton from "./MemoVIdeoPlayButton"

const MemoVideoControllers = ({
  styles,
  isPlaying,
  isMute,
  togglePlay,
  toggleMute,
  videoPlayProgress,
  handleProgressHandleChange,
}) => (
  <div className={styles.controls}>
    <div className={styles.actions}>
      <MemoVideoPlayButton togglePlay={togglePlay} isPlaying={isPlaying} />
    </div>
    <input
      type="range"
      min="0"
      max="100"
      value={videoPlayProgress}
      onChange={handleProgressHandleChange}
      className={styles.progressBar}
    />
    <MemoVideoMuteButton toggleMute={toggleMute} isMute={isMute} />
  </div>
)

export default MemoVideoControllers
