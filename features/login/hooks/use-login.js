import { useState, useCallback } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../../../contexts/auth"
import callApi from "../../../utilities/call-api"

const useLogin = () => {
  const router = useRouter()
  const { logIn } = useAuth()
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
        logIn(token, router.query.ref)
      } catch (err) {
        setErrorMessage("Login Failed")
      } finally {
        setIsProcessing(false)
        resetForm()
      }
    },
    [email, password, resetForm, router.query.ref, logIn]
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
