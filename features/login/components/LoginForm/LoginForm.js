import CenteredForm from "../../../../components/CenteredForm"
import MemoInput from "../../../../components/MemoInput"
import styles from "./LoginForm.module.scss"

const LoginForm = () => {
  return (
    <CenteredForm className={styles.card}>
      <h1>Log in</h1>
      <form className={styles.loginFormContainer}>
        <div className={styles.inputsContainer}>
          <MemoInput
            label="Email:"
            id="email-input"
            type="email"
            name="email"
            placeholder="for example jennifer@somename.com"
            required
          />
          <MemoInput
            label="Password:"
            id="password-input"
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
        </div>
        <MemoInput id="login-submit" type="submit" />
      </form>
    </CenteredForm>
  )
}

export default LoginForm
