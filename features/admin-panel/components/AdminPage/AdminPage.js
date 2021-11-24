import { Admin, Resource, ListGuesser } from "react-admin"
import { useDataProvider, useAuthProvider } from "../../hooks"
import ProductList from "../ProductList"
import styles from "./AdminPage.module.scss"

const AdminPage = () => {
  const dataProvider = useDataProvider()
  const authProvider = useAuthProvider()

  if (!dataProvider) return <p>Loading...</p>
  return (
    <div className={styles.adminContainer}>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="yard_users" list={ProductList} />
      </Admin>
    </div>
  )
}

export default AdminPage
