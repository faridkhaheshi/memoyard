import { Admin, Resource } from "react-admin"
import useDataProvider from "../../hooks/use-data-provider"
import jsonServerProvider from "ra-data-json-server"
import styles from "./AdminPage.module.scss"

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

const AdminPage = () => {
  // const dataProvider = useDataProvider()

  // if (!dataProvider) return <p>Loading...</p>
  return <Admin dataProvider={dataProvider} />
}

export default AdminPage
