import CenteredForm from "../../../../components/CenteredForm"
import MemoInput from "../../../../components/MemoInput"
import { useLogin } from "../../hooks"
import styles from "./LoginForm.module.scss"

const LoginForm = () => {
  const {
    email,
    updateEmail,
    password,
    updatePassword,
    handleSubmit,
    errorMessage,
    isProcessing,
  } = useLogin()

  return (
    <CenteredForm className={styles.card}>
      <h2>Enter your credentials to log in</h2>
      <form className={styles.loginFormContainer} onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <MemoInput
            label="Email:"
            id="email-input"
            type="email"
            name="email"
            placeholder="for example jennifer@somename.com"
            autoComplete="on"
            value={email}
            onChange={updateEmail}
            required
          />
          <MemoInput
            label="Password:"
            id="password-input"
            type="password"
            name="password"
            placeholder="Your password"
            autoComplete="on"
            value={password}
            onChange={updatePassword}
            required
          />
        </div>
        <MemoInput
          value="Log in"
          id="login-submit"
          type="submit"
          disabled={!email || !password || isProcessing}
        />
        {errorMessage && (
          <small className={styles.errorMessage}>{errorMessage}</small>
        )}
      </form>
    </CenteredForm>
  )
}

export default LoginForm
