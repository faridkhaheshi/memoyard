import { useState, useCallback } from "react"
import callApi from "../../../utilities/call-api"

const useLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const updateEmail = useCallback(e => setEmail(e.target.value), [])
  const updatePassword = useCallback(e => setPassword(e.target.value), [])
  const resetForm = useCallback(() => {
    setEmail("")
    setPassword("")
  }, [])
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        setErrorMessage(null)
        setIsProcessing(true)
        const { token } = await callApi("/api/auth/login", {
          method: "POST",
          body: { email, password },
        })
        console.log(token)
      } catch (err) {
        console.error(err)
        setErrorMessage("Login Failed")
      } finally {
        setIsProcessing(false)
        resetForm()
      }
    },
    [email, password, resetForm]
  )

  return {
    email,
    updateEmail,
    password,
    updatePassword,
    handleSubmit,
    errorMessage,
    isProcessing,
  }
}

export default useLogin
