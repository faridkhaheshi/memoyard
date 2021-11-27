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

export const organizationsFilters = [
  <TextInput
    key="ex_id_organizations_filter"
    label="ex_id"
    source="ex_id"
    alwaysOn
  />,
]

export const OrganizationList = props => (
  <List {...props} filters={organizationsFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="ex_id" label="ex_id" />
      <TextField source="name" />
      <TextField source="slug" />
      <ReferenceManyField
        label="groups"
        reference="yard_groups"
        target="org_id"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceManyField>
      <ReferenceField
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <FunctionField
          render={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceField>
      <TextField label="creator_id" source="creator_id" />
      <BooleanField source="active" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const OrganizationCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="slug" />
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record =>
            `${record.first_name} ${record.last_name} (id=${record.id})`
          }
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export const OrganizationEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <TextInput source="name" />
      <TextInput source="slug" />
      <ReferenceInput
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <SelectInput
          optionText={record =>
            `${record.first_name} ${record.last_name} (id=${record.id})`
          }
        />
      </ReferenceInput>
      <ReferenceManyField
        label="groups"
        reference="yard_groups"
        target="org_id"
      >
        <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="ex_id" />
          <BooleanField source="active" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)

// function OrganizationGroupSubjectsList({ record }) {
//   return (
//     <ReferenceManyField
//       record={record}
//       label="subjects"
//       reference="yard_subjects"
//       target="org_id"
//     >
//       <Datagrid>
//         <TextField source="name" />
//       </Datagrid>
//     </ReferenceManyField>
//   )
// }
