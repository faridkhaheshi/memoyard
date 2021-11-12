const MemoVideoMuteButton = ({ isMute, toggleMute }) => (
  <button onClick={toggleMute}>
    {isMute ? (
      <i className="fas fa-volume-up" />
    ) : (
      <i className="fas fa-volume-mute" />
    )}
  </button>
)

export default MemoVideoMuteButton
