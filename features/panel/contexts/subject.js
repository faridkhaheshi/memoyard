import { useContext, createContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import FullPagePanelLoader from "../components/FullPagePanelLoader"
import useOrgSubjects from "../hooks/use-org-subjects"

const SubjectContext = createContext()
export const useSubjectContext = () => useContext(SubjectContext)

export const SubjectContextProvider = ({ children }) => {
  const {
    query: { slug: orgSlug, subjectExId },
  } = useRouter()
  const [subject, setSubject] = useState(null)
  const { subjects, refreshSubjectsInfo } = useOrgSubjects(orgSlug)

  useEffect(() => {
    if (!!subjects) {
      const theSubject = subjects.find(s => s.ex_id === subjectExId)
      setSubject(theSubject)
    }
  }, [subjects, subjectExId, setSubject])

  const subjectContextValues = {
    orgSlug,
    subject,
    subjectExId,
    refreshSubjectsInfo,
  }

  if (!subject) return <FullPagePanelLoader />

  return (
    <SubjectContext.Provider value={subjectContextValues}>
      {children}
    </SubjectContext.Provider>
  )
}

export default SubjectContext
