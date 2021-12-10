import { NextSeo } from "next-seo"
import FullPageCentered from "../components/FullPageCentered"
import LoginWithTicketForm from "../features/login/components/LoginWithTicketForm/LoginWithTicketForm"

export default function LoginPage() {
  return (
    <FullPageCentered bgColor="skyBlue">
      <NextSeo title="Log in to share memories" />
      <LoginWithTicketForm />
    </FullPageCentered>
  )
}
