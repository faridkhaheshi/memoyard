import { useState, useCallback } from "react"
import { usePanelContext } from "../../../contexts/panel"
import useAssetCreate from "../../../hooks/use-asset-create"
import AdminAdderForm from "./AdminAdderForm"

const AdminAdder = () => {
  const { slug } = usePanelContext()
  const [selectedGroups, setSelectedGroups] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const resetForm = useCallback(() => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setSelectedGroups([])
  }, [])

  const { handleSubmit, isLoading, errorMessage } = useAssetCreate({
    baseApiPath: "/api/organization_admins",
    body: {
      orgSlug: slug,
      adminInfo: {
        firstName,
        lastName,
        email,
      },
      groups: selectedGroups,
    },
    onSuccess: () => {
      resetForm()
    },
  })

  return (
    <AdminAdderForm
      selectedGroups={selectedGroups}
      onChangeSelectedGroups={setSelectedGroups}
      firstName={firstName}
      onFirstNameChange={e => setFirstName(e.target.value)}
      lastName={lastName}
      onLastNameChange={e => setLastName(e.target.value)}
      email={email}
      onEmailChange={e => setEmail(e.target.value)}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onCancel={resetForm}
    />
  )
}

export default AdminAdder
