import {
  BooleanField,
  BooleanInput,
  ChipField,
  Create,
  DateField,
  Datagrid,
  DeleteButton,
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

export const mediaFilters = [
  <TextInput key="ex_id_media_filter" label="ex_id" source="ex_id" alwaysOn />,
]

export const MediaList = props => (
  <List {...props} filters={mediaFilters}>
    <Datagrid rowClick="edit" expand={<JsonDataViewer />}>
      <TextField source="id" />
      <TextField source="ex_id" />
      <ReferenceField
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <FunctionField
          render={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceField>
      <ReferenceManyField
        label="tags"
        reference="yard_media_tags"
        target="media_id"
      >
        <SingleFieldList>
          <MemoMediaTag />
        </SingleFieldList>
      </ReferenceManyField>
      <TextField source="media_type" />
      <TextField source="file_type" />
      <BooleanField source="active" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const MediaEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="ex_id" />
      <ReferenceField
        label="creator"
        source="creator_id"
        reference="yard_users"
      >
        <FunctionField
          render={record => `${record.first_name} ${record.last_name}`}
        />
      </ReferenceField>
      <BooleanInput source="active" />
      <TextField source="org_id" label="org_id" />
      <TextField source="file_url" />
      <TextField source="media_type" />
      <TextField source="file_type" />
      <TextField source="original_file_name" />
      <TextField source="original_file_size" />
      <ReferenceField
        label="organization"
        source="org_id"
        reference="yard_organizations"
      >
        <TextField source="name" />
      </ReferenceField>
      <BooleanInput source="active" />
      <ReferenceManyField
        label="tags"
        reference="yard_media_tags"
        target="media_id"
      >
        <Datagrid expand={<JsonDataViewer />}>
          <TextField source="id" />
          <TextField source="ex_id" />
          <BooleanField source="active" />
          <TextField source="media_tag_type" />
          <MemoMediaTag />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)

export function MemoMediaTag(props) {
  const {
    record: { media_tag_type, subject_id, group_id } = {},
    ...otherProps
  } = props
  const refereceProps =
    media_tag_type === "group"
      ? { source: "group_id", reference: "yard_groups" }
      : media_tag_type === "subject"
      ? { source: "subject_id", reference: "yard_subjects" }
      : {}

  if (!media_tag_type) return null
  return (
    <ReferenceField {...otherProps} {...refereceProps}>
      <ChipField source="name" />
    </ReferenceField>
  )
}
