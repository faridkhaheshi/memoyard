import { useState } from "react"
import MemoInput from "../../../../components/MemoInput"
import MemoError from "../../../../components/MemoError"
import { useTicket } from "../../hooks"

import styles from "../LoginForm/LoginForm.module.scss"

const LoginWithTicketValidationForm = ({ email, goBack }) => {
  const [ticket, setTicket] = useState("")
  const { handleValidationSubmit, isValidating, validationErrorMessage } =
    useTicket({ email, ticket })

  return (
    <>
      <div className={styles.headerContainer}>
        <button type="button" onClick={goBack}>
          <i className="fas fa-chevron-left" /> Go Back
        </button>
      </div>
      <p>
        We sent a code to <strong>{email}</strong>. Please enter it here to log
        in:
      </p>
      <form
        className={styles.loginFormContainer}
        onSubmit={handleValidationSubmit}
      >
        <div className={styles.inputsContainer}>
          <MemoInput
            required
            label="Code:"
            type="number"
            name="ticket"
            id="ticket-input"
            placeholder="Enter the number here"
            autoComplete="off"
            value={ticket}
            onChange={e => setTicket(e.target.value)}
          />
          <MemoError errorMessage={validationErrorMessage} />
        </div>
        <MemoInput
          value="Log in"
          id="ticket-submit"
          type="submit"
          disabled={isValidating}
        />
      </form>
    </>
  )
}

export default LoginWithTicketValidationForm
