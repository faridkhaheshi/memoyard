import { Admin, Resource } from "react-admin"
import { FullPageCentered } from "../../../../components"
import { useDataProvider, useAuthProvider } from "../../hooks"
import {
  AdminGroupEdit,
  AdminGroupList,
  AdminGroupCreate,
  GroupCreate,
  GroupEdit,
  GroupList,
  MediaEdit,
  MediaList,
  MediaTagEdit,
  MediaTagsList,
  OrganizationAdminCreate,
  OrganizationAdminEdit,
  OrganizationAdminList,
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

const AdminPage = ({ hasuraToken, refreshAdminUser }) => {
  const dataProvider = useDataProvider(hasuraToken)
  const authProvider = useAuthProvider(hasuraToken, refreshAdminUser)

  if (!dataProvider) return <FullPageCentered>Loading...</FullPageCentered>
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
        <Resource
          name="yard_organization_admins"
          options={{ label: "Organization Admins" }}
          list={OrganizationAdminList}
          create={OrganizationAdminCreate}
          edit={OrganizationAdminEdit}
        />
        <Resource
          name="yard_admin_groups"
          options={{ label: "Admin Groups" }}
          list={AdminGroupList}
          create={AdminGroupCreate}
          edit={AdminGroupEdit}
        />
        <Resource
          name="yard_media"
          options={{ label: "Media" }}
          list={MediaList}
          edit={MediaEdit}
        />
        <Resource
          name="yard_media_tags"
          options={{ label: "Media Tags" }}
          list={MediaTagsList}
          edit={MediaTagEdit}
        />
      </Admin>
    </div>
  )
}

export default AdminPage
