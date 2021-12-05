import { useContext, createContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
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

  if (!subject)
    return (
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    )

  return (
    <SubjectContext.Provider value={subjectContextValues}>
      {children}
    </SubjectContext.Provider>
  )
}

export default SubjectContext
