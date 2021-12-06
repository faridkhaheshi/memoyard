import {
  BooleanField,
  BooleanInput,
  Create,
  DateField,
  Datagrid,
  Edit,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"
import JsonDataViewer from "../JsonDataViewer"

export const adminGroupFilters = [
  <TextInput key="org_id_admin_group_filter" label="org_id" source="org_id" />,
  <ReferenceInput
    key="org_admin_group_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
    alwaysOn
  >
    <SelectInput source="name" />
  </ReferenceInput>,
  <TextInput
    key="admin_id_admin_group_filter"
    label="admin_id"
    source="admin_id"
  />,
  <ReferenceInput
    key="admin_admin_group_filter"
    label="admin"
    source="admin_id"
    reference="yard_organization_admins"
    alwaysOn
  >
    <SelectInput
      optionText={record => `${record.first_name} ${record.last_name}`}
    />
  </ReferenceInput>,
  <BooleanInput key="active_admin_group_filter" source="active" />,
]

export const AdminGroupList = props => (
  <List {...props} filters={adminGroupFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="ex_id" />
      <BooleanField source="active" />
      <ReferenceField
        label="admin"
        source="admin_id"
        reference="yard_organization_admins"
      >
        <FunctionField
          render={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceField>
      <ReferenceField
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="group" source="group_id" reference="yard_groups">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="org_id" label="org_id" />
      <TextField source="admin_id" label="admin_id" />
      <TextField source="group_id" label="group_id" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const AdminGroupCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="org_id" reference="yard_organizations">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput
        label="admin"
        source="admin_id"
        reference="yard_organization_admins"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput label="group" source="group_id" reference="yard_groups">
        <SelectInput source="name" />
      </ReferenceInput>
      <BooleanInput source="active" initialValue={true} />
    </SimpleForm>
  </Create>
)

export const AdminGroupEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <ReferenceInput source="org_id" reference="yard_organizations">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput
        label="admin"
        source="admin_id"
        reference="yard_organization_admins"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput source="group_id" reference="yard_groups">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)
