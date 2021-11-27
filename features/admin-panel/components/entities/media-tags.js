import {
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  DateField,
  Datagrid,
  Edit,
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
import { MemoMediaTag } from "./media"

export const MediaTagsList = props => (
  <List {...props}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <MemoMediaTag />
      <TextField source="ex_id" />
      <TextField source="media_id" />
      <BooleanField source="active" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const MediaTagEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <MemoMediaTag label="tag" />
      <TextField source="org_id" />
      <ReferenceField
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <TextField source="name" />
      </ReferenceField>
      <TextField source="creator_id" />
      <ReferenceField
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <FunctionField
          render={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceField>
      <TextField source="media_id" />
      <ReferenceField
        label="media_url"
        source="media_id"
        reference="yard_media"
      >
        <TextField source="file_url" />
      </ReferenceField>
      <TextField source="media_tag_type" />
      <TextField source="group_id" />
      <TextField source="subject_id" />
      <BooleanInput source="active" />
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)
