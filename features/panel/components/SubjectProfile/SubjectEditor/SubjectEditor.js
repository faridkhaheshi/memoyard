import { useState, useCallback } from "react"
import SubjectEditForm from "./SubjectEditForm"
import { useSubjectContext } from "../../../contexts/subject"
import useAssetUpdate from "../../../hooks/use-asset-update"

const SubjectEditor = () => {
  const { subject, subjectExId, refreshSubjectsInfo } = useSubjectContext()
  const [name, setName] = useState(subject.name || "")
  const [active, setActive] = useState(subject.active || false)
  const [groupExId, setGroupExId] = useState(
    subject.groups.length === 0 ? "" : subject.groups[0].ex_id
  )

  const resetForm = useCallback(() => {
    setName(subject?.name)
    setActive(subject?.active)
    setGroupExId(subject.groups.length === 0 ? "" : subject.groups[0].ex_id)
  }, [setName, subject, setActive, setGroupExId])

  const { handleSubmit, isLoading, errorMessage } = useAssetUpdate({
    baseApiPath: `/api/subjects/${subjectExId}`,
    body: {
      name,
      active,
      groupExId,
    },
    onSuccess: refreshSubjectsInfo,
  })

  return (
    <SubjectEditForm
      name={name}
      onNameChange={e => setName(e.target.value)}
      active={active}
      onActiveChange={e => setActive(e.target.checked)}
      groupExId={groupExId}
      onGroupExIdChange={e => setGroupExId(e.target.value)}
      onCancel={resetForm}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      hasChanged={
        name !== subject.name ||
        active !== subject.active ||
        (subject.groups.length > 0 && subject.groups[0].ex_id !== groupExId)
      }
    />
  )
}

export default SubjectEditor
