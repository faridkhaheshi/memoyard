import { NextSeo } from "next-seo"
import FullPageCentered from "../components/FullPageCentered"
import LoginForm from "../features/login/components/LoginForm"

export default function LoginPage() {
  return (
    <FullPageCentered bgColor="skyBlue">
      <NextSeo title="Log in to share memories" />
      <LoginForm />
    </FullPageCentered>
  )
}
