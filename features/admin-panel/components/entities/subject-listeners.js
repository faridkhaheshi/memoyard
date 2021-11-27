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

const subjectListenerFilters = [
  <TextInput
    key="ex_id_subject_listener_filter"
    label="ex_id"
    source="ex_id"
    alwaysOn
  />,
  <TextInput
    key="org_id_subject_listener_filter"
    label="org_id"
    source="org_id"
    alwaysOn
  />,
  <ReferenceInput
    key="org_subject_listener_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
    alwaysOn
  >
    <SelectInput source="name" />
  </ReferenceInput>,
]

export const SubjectListenerList = props => (
  <List {...props} filters={subjectListenerFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="ex_id" />
      <BooleanField source="active" />
      <ReferenceField
        label="subject"
        source="subject_id"
        reference="yard_subjects"
      >
        <TextField source="name" />
      </ReferenceField>
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
      <TextField source="org_id" label="org_id" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const SubjectListenerEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <TextField source="creator_id" label="creator_id" />
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <TextField source="org_id" label="org_id" />
      <ReferenceInput
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextField source="subject_id" label="subject_id" />
      <ReferenceInput
        label="subject"
        source="subject_id"
        reference="yard_subjects"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextField source="user_id" label="user_id" />
      <ReferenceInput label="user" source="user_id" reference="yard_users">
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)

export const SubjectListenerCreate = props => (
  <Create {...props}>
    <SimpleForm>
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
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="subject"
        source="subject_id"
        reference="yard_subjects"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="user" source="user_id" reference="yard_users">
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
