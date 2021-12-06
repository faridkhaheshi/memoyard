import {
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  DateField,
  Datagrid,
  Edit,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin"
import JsonDataViewer from "../JsonDataViewer"

export const organizationAdminFilters = [
  <TextInput
    key="org_id_org_admin_filter"
    label="org_id"
    source="org_id"
    alwaysOn
  />,
  <TextInput
    key="ex_id_organizations_filter"
    label="ex_id"
    source="ex_id"
    alwaysOn
  />,
  <ReferenceInput
    key="org_org_admin_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
    alwaysOn
  >
    <SelectInput source="name" />
  </ReferenceInput>,
  <BooleanInput key="active_org_admin_filter" source="active" />,
]

export const OrganizationAdminList = props => (
  <List {...props} filters={organizationAdminFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="ex_id" />
      <BooleanField source="active" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <ReferenceField label="user" source="user_id" reference="yard_users">
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
      <ReferenceManyField
        label="groups"
        reference="yard_admin_groups"
        target="admin_id"
      >
        <SingleFieldList>
          <ReferenceField source="group_id" reference="yard_groups">
            <ChipField source="name" />
          </ReferenceField>
        </SingleFieldList>
      </ReferenceManyField>
      <TextField source="org_id" />
      <TextField source="user_id" />
      <TextField source="org_id" label="org_id" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const OrganizationAdminCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="org_id" reference="yard_organizations">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput label="user" source="user_id" reference="yard_users">
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <BooleanInput source="active" initialValue={true} />
    </SimpleForm>
  </Create>
)

export const OrganizationAdminEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <ReferenceInput source="org_id" reference="yard_organizations">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput label="user" source="user_id" reference="yard_users">
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceManyField
        label="groups"
        reference="yard_admin_groups"
        target="admin_id"
      >
        <Datagrid expand={<JsonDataViewer />}>
          <TextField source="id" />
          <TextField source="ex_id" label="ex_id" />
          <TextField source="group_id" label="group_id" />
          <BooleanField source="active" />
          <ReferenceField source="group_id" reference="yard_groups">
            <TextField source="name" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)
