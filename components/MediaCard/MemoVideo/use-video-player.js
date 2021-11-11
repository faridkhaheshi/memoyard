import { useRef, useState, useCallback, useEffect } from "react"

const useVideoPlayer = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoPlayProgress, setVideoPlayProgress] = useState(0)
  const [isMute, setIsMute] = useState(true)

  const handleOnTimeUpdate = useCallback(() => {
    if (videoRef.current && videoRef.current.currentTime) {
      setVideoPlayProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      )
    }
  }, [videoRef, setVideoPlayProgress])

  const handleProgressHandleChange = useCallback(
    e => {
      const newProgressValue = Number(e.target.value)
      videoRef.current.currentTime =
        videoRef.current.duration * (newProgressValue / 100)
      setVideoPlayProgress(newProgressValue)
    },
    [videoRef, setVideoPlayProgress]
  )

  const toggleMute = useCallback(() => setIsMute(old => !old), [setIsMute])

  const togglePlay = useCallback(
    () => setIsPlaying(old => !old),
    [setIsPlaying]
  )

  useEffect(() => {
    videoRef.current.muted = isMute
  }, [isMute, videoRef])

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying, videoRef])

  return {
    videoRef,
    isMute,
    isPlaying,
    videoPlayProgress,
    toggleMute,
    togglePlay,
    handleOnTimeUpdate,
    handleProgressHandleChange,
  }
}

export default useVideoPlayer
