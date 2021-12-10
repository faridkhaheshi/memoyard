import { useState } from "react"
import CenteredForm from "../../../../components/CenteredForm"
import LoginWithTicketEmailForm from "./LoginWithTicketEmailForm"
import LoginWithTicketValidationForm from "./LoginWithTicketValidationForm"

import styles from "../LoginForm/LoginForm.module.scss"

const LoginWithTicketForm = () => {
  const [step, setStep] = useState("email")
  const [email, setEmail] = useState("")

  return (
    <CenteredForm className={styles.card}>
      {step === "email" ? (
        <LoginWithTicketEmailForm
          email={email}
          setEmail={setEmail}
          proceed={setStep.bind(null, "ticket")}
        />
      ) : (
        <LoginWithTicketValidationForm
          email={email}
          goBack={setStep.bind(null, "email")}
        />
      )}
    </CenteredForm>
  )
}

export default LoginWithTicketForm
