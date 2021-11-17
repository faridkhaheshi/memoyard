const MemoVideoPlayButton = ({ togglePlay, isPlaying }) => (
  <button onClick={togglePlay}>
    {isPlaying ? <i className="fas fa-pause" /> : <i className="fas fa-play" />}
  </button>
)

export default MemoVideoPlayButton
