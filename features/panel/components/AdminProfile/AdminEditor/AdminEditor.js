import { useState, useCallback } from "react"
import AdminAdderForm from "../../OrgAdmins/AdminAdder/AdminAdderForm"
import { useAdmin } from "../../../contexts/admin"
import useAssetUpdate from "../../../hooks/use-asset-update"

const AdminEditor = ({ sx = {} }) => {
  const { admin, refreshAdminsInfo, orgSlug } = useAdmin()
  const [firstName, setFirstName] = useState(admin.first_name || "")
  const [lastName, setLastName] = useState(admin.last_name || "")
  const [selectedGroups, setSelectedGroups] = useState(
    admin.groups.map(g => g.ex_id)
  )

  const resetForm = useCallback(() => {
    setFirstName(admin.first_name || "")
    setLastName(admin.last_name || "")
    setSelectedGroups(admin.groups.map(g => g.ex_id))
  }, [admin.first_name, admin.last_name, admin.groups])

  const { handleSubmit, isLoading, errorMessage } = useAssetUpdate({
    baseApiPath: `/api/organization-admins/${admin.ex_id}`,
    body: {
      first_name: firstName,
      last_name: lastName,
      groups: selectedGroups,
      orgSlug,
    },
    onSuccess: refreshAdminsInfo,
  })

  return (
    <AdminAdderForm
      sx={sx}
      disableEmailChange
      selectedGroups={selectedGroups}
      onChangeSelectedGroups={setSelectedGroups}
      firstName={firstName}
      onFirstNameChange={e => setFirstName(e.target.value)}
      lastName={lastName}
      onLastNameChange={e => setLastName(e.target.value)}
      email={admin.email}
      onSubmit={handleSubmit}
      onCancel={resetForm}
      isLoading={isLoading}
      submitText="Save Changes"
      titleText="Edit Teacher's Info"
      hideActions={
        firstName === admin.first_name &&
        lastName === admin.last_name &&
        selectedGroups.every(
          sg => admin.groups.map(g => g.ex_id).indexOf(sg) > -1
        ) &&
        selectedGroups.length === admin.groups.length
      }
    />
  )
}

export default AdminEditor
