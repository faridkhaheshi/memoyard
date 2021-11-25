import { Admin, Resource } from "react-admin"
import { useDataProvider, useAuthProvider } from "../../hooks"
import {
  GroupCreate,
  GroupEdit,
  GroupList,
  OrganizationCreate,
  OrganizationEdit,
  OrganizationList,
  SubjectCreate,
  SubjectEdit,
  SubjectGroupCreate,
  SubjectGroupEdit,
  SubjectGroupList,
  SubjectList,
  SubjectListenerCreate,
  SubjectListenerEdit,
  SubjectListenerList,
  UserCreate,
  UserEdit,
  UserList,
} from "../entities"
import styles from "./AdminPage.module.scss"

const AdminPage = () => {
  const dataProvider = useDataProvider()
  const authProvider = useAuthProvider()

  if (!dataProvider) return <p>Loading...</p>
  return (
    <div className={styles.adminContainer}>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="yard_users"
          options={{ label: "Users" }}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource
          name="yard_organizations"
          options={{ label: "Organizations" }}
          list={OrganizationList}
          create={OrganizationCreate}
          edit={OrganizationEdit}
        />
        <Resource
          name="yard_groups"
          options={{ label: "Groups" }}
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
        />
        <Resource
          name="yard_subjects"
          options={{ label: "Subjects" }}
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
        />
        <Resource
          name="yard_subject_groups"
          options={{ label: "Subject Groups" }}
          list={SubjectGroupList}
          edit={SubjectGroupEdit}
          create={SubjectGroupCreate}
        />
        <Resource
          name="yard_subject_listeners"
          options={{ label: "Subject Listeners" }}
          list={SubjectListenerList}
          edit={SubjectListenerEdit}
          create={SubjectListenerCreate}
        />
      </Admin>
    </div>
  )
}

export default AdminPage
