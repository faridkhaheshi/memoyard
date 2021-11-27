import {
  BooleanField,
  BooleanInput,
  Create,
  DateField,
  Datagrid,
  Edit,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"
import JsonDataViewer from "../JsonDataViewer"

const subjectGroupFilters = [
  <TextInput
    key="ex_id_subject_group_filter"
    label="ex_id"
    source="ex_id"
    alwaysOn
  />,
  <TextInput
    key="org_id_subject_group_filter"
    label="org_id"
    source="org_id"
    alwaysOn
  />,
  <ReferenceInput
    key="org_subject_group_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
    alwaysOn
  >
    <SelectInput source="name" />
  </ReferenceInput>,
]

export const SubjectGroupList = props => (
  <List {...props} filters={subjectGroupFilters}>
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
      <ReferenceField label="group" source="group_id" reference="yard_groups">
        <TextField source="name" />
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

export const SubjectGroupEdit = props => (
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
      <TextField source="group_id" label="group_id" />
      <ReferenceInput label="group" source="group_id" reference="yard_groups">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)

export const SubjectGroupCreate = props => (
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
      <TextField source="subject_id" label="subject_id" />
      <ReferenceInput
        label="subject"
        source="subject_id"
        reference="yard_subjects"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextField source="group_id" label="group_id" />
      <ReferenceInput label="group" source="group_id" reference="yard_groups">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
