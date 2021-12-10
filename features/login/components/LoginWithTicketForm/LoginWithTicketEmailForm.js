import MemoInput from "../../../../components/MemoInput"
import MemoError from "../../../../components/MemoError"
import { useTicket } from "../../hooks"

import styles from "../LoginForm/LoginForm.module.scss"

const LoginWithTicketEmailForm = ({
  email,
  setEmail,
  proceed = () => ({}),
}) => {
  const { handleRequestCodeSubmit, isSendingTicket, sendingErrorMessage } =
    useTicket({
      proceed,
      email,
    })

  return (
    <>
      <h2>Log in</h2>
      <p>Enter your e-mail to receive a login code:</p>
      <form
        className={styles.loginFormContainer}
        onSubmit={handleRequestCodeSubmit}
      >
        <div className={styles.inputsContainer}>
          <MemoInput
            required
            type="email"
            name="email"
            id="email-input"
            placeholder="for example jennifer@somename.com"
            autoComplete="on"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <MemoError errorMessage={sendingErrorMessage} />
        </div>
        <MemoInput
          value="Receive a login code"
          id="login-submit"
          type="submit"
          disabled={isSendingTicket}
        />
      </form>
    </>
  )
}

export default LoginWithTicketEmailForm
