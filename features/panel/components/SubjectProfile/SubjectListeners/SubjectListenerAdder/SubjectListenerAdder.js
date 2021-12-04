import { useState } from "react"
import SubjectListenerForm from "./SubjectListenerForm"
import useAssetCreate from "../../../../hooks/use-asset-create"
import { useSubjectContext } from "../../../../contexts/subject"

const SubjectListenerAdder = ({ sx = {} }) => {
  const {
    subject: { ex_id: subjectExId },
    orgSlug,
  } = useSubjectContext()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")

  const { handleSubmit, isLoading, errorMessage } = useAssetCreate({
    baseApiPath: "/api/subject_listeners",
    body: {
      subjectListenerInfo: {
        firstName,
        lastName,
        email,
        mobile,
      },
      orgSlug,
      subjectExId,
    },
    onSuccess: result => {
      console.log(resulg)
      // setName("")
      // setGroupExId("")
      // refresh()
    },
  })

  return (
    <SubjectListenerForm
      sx={{ marginTop: 2 }}
      firstName={firstName}
      onFirstNameChange={e => setFirstName(e.target.value)}
      lastName={lastName}
      onLastNameChange={e => setLastName(e.target.value)}
      email={email}
      onEmailChange={e => setEmail(e.target.value)}
      mobile={mobile}
      onMobileChange={e => setMobile(e.target.value)}
      onSubmit={handleSubmit}
    />
  )
}

export default SubjectListenerAdder
