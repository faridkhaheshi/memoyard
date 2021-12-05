import { useState, useCallback } from "react"
import SubjectListenerForm from "./SubjectListenerForm"
import useAssetCreate from "../../../../hooks/use-asset-create"
import { useSubjectContext } from "../../../../contexts/subject"

const SubjectListenerAdder = () => {
  const {
    subject: { ex_id: subjectExId },
    orgSlug,
    refreshSubjectsInfo,
  } = useSubjectContext()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const clearForm = useCallback(() => {
    setFirstName("")
    setLastName("")
    setEmail("")
  }, [])

  const { handleSubmit, isLoading, errorMessage } = useAssetCreate({
    baseApiPath: "/api/subject_listeners",
    body: {
      subjectListenerInfo: {
        firstName,
        lastName,
        email,
      },
      orgSlug,
      subjectExId,
    },
    onSuccess: () => {
      clearForm()
      refreshSubjectsInfo()
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
      onSubmit={handleSubmit}
      onCancel={clearForm}
      isLoading={isLoading}
    />
  )
}

export default SubjectListenerAdder
