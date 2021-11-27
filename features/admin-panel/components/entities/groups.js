import {
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  DateField,
  Datagrid,
  DatagridRow,
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

export const groupFilters = [
  <TextInput
    key="org_id_group_filter"
    label="org_id"
    source="org_id"
    alwaysOn
  />,
  <ReferenceInput
    key="org_group_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
    alwaysOn
  >
    <SelectInput source="name" />
  </ReferenceInput>,
]

export const GroupList = props => (
  <List {...props} filters={groupFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="ex_id" label="ex_id" />
      <TextField source="name" />
      <ReferenceField
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="active" />
      <TextField source="org_id" label="org_id" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const GroupEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <TextInput source="name" />
      <TextField source="creator_id" label="creator_id" />
      <ReferenceField
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <FunctionField
          render={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceField>
      <TextField source="org_id" label="org_id" />
      <ReferenceField
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <TextField source="name" />
      </ReferenceField>
      <BooleanInput source="active" />
      <ReferenceManyField
        label="subjects"
        reference="yard_subject_groups"
        target="group_id"
      >
        <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
          <ReferenceField source="subject_id" reference="yard_subjects">
            <DatagridRow>
              <TextField source="id" />
              <TextField source="ex_id" />
              <TextField source="name" />
              <BooleanField source="active" />
              <EditButton />
            </DatagridRow>
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)

export const GroupCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceInput>
      <ReferenceInput source="org_id" reference="yard_organizations">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
