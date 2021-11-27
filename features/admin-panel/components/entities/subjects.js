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
  SingleFieldList,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin"
import JsonDataViewer from "../JsonDataViewer"

export const subjectFilters = [
  <TextInput
    key="ex_id_subjects_filter"
    label="ex_id"
    source="ex_id"
    alwaysOn
  />,
  <TextInput
    key="org_id_subject_filter"
    label="org_id"
    source="org_id"
    alwaysOn
  />,
  <ReferenceInput
    key="org_subject_filter"
    label="organization"
    source="org_id"
    reference="yard_organizations"
    alwaysOn
  >
    <SelectInput source="name" />
  </ReferenceInput>,
]

export const SubjectList = props => (
  <List {...props} filters={subjectFilters}>
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
      <ReferenceManyField
        label="groups"
        reference="yard_subject_groups"
        target="subject_id"
      >
        <SingleFieldList>
          <ReferenceField source="group_id" reference="yard_groups">
            <ChipField source="name" />
          </ReferenceField>
        </SingleFieldList>
      </ReferenceManyField>
      <ReferenceManyField
        label="listeners"
        reference="yard_subject_listeners"
        target="subject_id"
      >
        <SingleFieldList>
          <ReferenceField source="user_id" reference="yard_users">
            <UserInfoChipField />
          </ReferenceField>
        </SingleFieldList>
      </ReferenceManyField>
      <BooleanField source="active" />
      <TextField source="org_id" label="org_id" />
      <DateField source="created_at" showTime />
    </Datagrid>
  </List>
)

export const SubjectEdit = props => (
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
        label="groups"
        reference="yard_subject_groups"
        target="subject_id"
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
      <ReferenceManyField
        label="listeners"
        reference="yard_subject_listeners"
        target="subject_id"
      >
        <Datagrid expand={<JsonDataViewer />}>
          <TextField source="id" />
          <TextField source="ex_id" label="ex_id" />
          <TextField source="user_id" label="user_id" />
          <BooleanField source="active" />
          <ReferenceField source="user_id" reference="yard_users">
            <UserInfoChipField />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
      <DateField source="created_at" showTime />
      <DateField source="updated_at" showTime />
    </SimpleForm>
  </Edit>
)

export const SubjectCreate = props => (
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

function UserInfoChipField(props) {
  const { record, ...otherProps } = props
  const updatedProps = {
    source: "full_name",
    record: {
      ...record,
      full_name: `${record.first_name || ""} ${record.last_name || ""}`,
    },
    ...otherProps,
  }
  return <ChipField {...updatedProps} />
}
