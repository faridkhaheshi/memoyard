import { useState, useCallback, useEffect } from "react"

const RESET_SECONDS = 1

const useCopyToClipboard = (text, reset = true) => {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    if (!copied) {
      const result = copyToClipboard(text)
      setCopied(result)
      if (result && reset) {
        setTimeout(() => {
          setCopied(false)
        }, 1000 * RESET_SECONDS)
      }
    }
  }, [text, copied, reset])

  useEffect(() => () => setCopied(false), [text])

  return { copy, copied }
}

export default useCopyToClipboard

function copyToClipboard(str) {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false
  el.select()
  const success = document.execCommand("copy")
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
  return success
}
