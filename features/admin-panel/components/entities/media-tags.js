import {
  BooleanField,
  BooleanInput,
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
import { MemoMediaTag } from "./media"

const mediaTagFilters = [
  <TextInput
    key="ex_id_media_tag_filter"
    label="ex_id"
    source="ex_id"
    alwaysOn
  />,
  <TextInput key="org_id_media_tag_filter" label="org_id" source="org_id" />,
  <TextInput
    key="subject_id_media_tag_filter"
    label="subject_id"
    source="subject_id"
    alwaysOn
  />,
  <TextInput
    key="group_id_media_tag_filter"
    label="group_id"
    source="group_id"
    alwaysOn
  />,
  <ReferenceInput
    key="org_media_tag_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
  >
    <SelectInput source="name" />
  </ReferenceInput>,
]

export const MediaTagsList = props => (
  <List {...props} filters={mediaTagFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <MemoMediaTag />
      <TextField source="ex_id" label="ex_id" />
      <TextField source="media_id" />
      <BooleanField source="active" />
      <TextField source="org_id" label="org_id" />
      <TextField source="subject_id" label="subject_id" />
      <TextField source="group_id" label="group_id" />
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
