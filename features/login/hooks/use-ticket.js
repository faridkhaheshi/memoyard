import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../../../contexts/auth"
import callApi from "../../../utilities/call-api"

const useTicket = ({ email, ticket, proceed = () => ({}) }) => {
  const router = useRouter()
  const { logIn } = useAuth()
  const [sendingErrorMessage, setSendingErrorMessage] = useState(null)
  const [isSendingTicket, setIsSendingTicket] = useState(false)
  const [validationErrorMessage, setValidationErrorMessage] = useState(null)
  const [isValidating, setIsValidating] = useState(false)

  const handleRequestCodeSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        setSendingErrorMessage(null)
        setIsSendingTicket(true)
        await callApi("/api/tickets", { method: "POST", body: { email } })
        proceed()
      } catch (err) {
        setSendingErrorMessage(
          "We did not find any user with this email address. You should be invited by someone from a childcare center to use memoyard."
        )
        setIsSendingTicket(false)
      }
    },
    [email, proceed]
  )

  const handleValidationSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        setValidationErrorMessage(null)
        setIsValidating(true)
        const { token } = await callApi("/api/auth/login", {
          method: "POST",
          body: { email, ticket },
        })
        logIn(token, router.query.ref)
      } catch (err) {
        setValidationErrorMessage("Code is wrong. Please try again")
        setIsValidating(false)
      }
    },
    [ticket, email, router.query.ref, logIn]
  )

  return {
    handleRequestCodeSubmit,
    handleValidationSubmit,
    isSendingTicket,
    sendingErrorMessage,
    validationErrorMessage,
    isValidating,
  }
}

export default useTicket
