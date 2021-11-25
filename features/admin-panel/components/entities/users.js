import {
  BooleanField,
  BooleanInput,
  Create,
  DateField,
  Datagrid,
  Edit,
  EmailField,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"
import JsonDataViewer from "../JsonDataViewer"

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <BooleanField source="active" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_type" initialValue="normal" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" />
      <TextInput source="mobile" />
      <TextInput source="address" />
      <TextInput source="address_2" />
      <TextInput source="address_3" />
      <TextInput source="country" />
      <TextInput source="province" />
      <TextInput source="city" />
      <TextInput source="postal_code" />
    </SimpleForm>
  </Create>
)

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <TextInput source="user_type" initialValue="normal" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" />
      <TextInput source="mobile" />
      <TextInput source="address" />
      <TextInput source="address_2" />
      <TextInput source="address_3" />
      <TextInput source="country" />
      <TextInput source="province" />
      <TextInput source="city" />
      <TextInput source="postal_code" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
)
