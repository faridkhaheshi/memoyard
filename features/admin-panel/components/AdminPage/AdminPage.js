import { Admin, Resource, ListGuesser } from "react-admin"
import { useDataProvider, useAuthProvider } from "../../hooks"
import styles from "./AdminPage.module.scss"

const AdminPage = () => {
  const dataProvider = useDataProvider()
  const authProvider = useAuthProvider()

  if (!dataProvider) return <p>Loading...</p>
  return (
    <div className={styles.adminContainer}>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </div>
  )
}

export default AdminPage
