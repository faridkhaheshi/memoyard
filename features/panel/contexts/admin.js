import { createContext, useContext, useEffect, useState } from "react"
import FullPagePanelLoader from "../components/FullPagePanelLoader"

import { useRouter } from "next/router"
import { useOrgAdmins } from "../hooks"

const AdminContext = createContext()
export const useAdmin = () => useContext(AdminContext)

export const AdminContextProvider = ({ children }) => {
  const {
    query: { slug: orgSlug, adminExId },
  } = useRouter()
  const [admin, setAdmin] = useState(null)
  const { admins, refreshAdminsInfo } = useOrgAdmins(orgSlug)

  useEffect(() => {
    if (!!admins) {
      const theAdmin = admins.find(a => a.ex_id === adminExId)
      setAdmin(theAdmin)
    }
  }, [admins, adminExId])

  const adminContextValues = {
    orgSlug,
    admin,
    adminExId,
    refreshAdminsInfo,
  }

  if (!admin) return <FullPagePanelLoader />

  return (
    <AdminContext.Provider value={adminContextValues}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContext
