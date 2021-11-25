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

export const OrganizationList = props => (
  <List {...props}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
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
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)
