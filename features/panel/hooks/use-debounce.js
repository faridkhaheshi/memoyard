import { useCallback, useRef } from "react"

const useDebounce = (func, delay) => {
  const timer = useRef()

  const debouncedFunc = useCallback(
    function (...args) {
      const context = this
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        timer.current = null
        func.apply(context, args)
      }, delay)
    },
    [delay, func]
  )

  return debouncedFunc
}

export default useDebounce
