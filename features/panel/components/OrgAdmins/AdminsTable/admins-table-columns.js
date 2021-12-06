import Chip from "@mui/material/Chip"
import PanelTableEditButton from "../../PanelTableEditButton"

const adminsTableColumns = [
  {
    field: "active",
    headerName: "active",
    description: "Shows the current status of the admin",
    type: "boolean",
    editable: true,
  },
  {
    field: "first_name",
    headerName: "First Name",
    flex: 0.5,
    editable: true,
  },
  {
    field: "last_name",
    headerName: "Last Name",
    flex: 0.5,
    editable: true,
  },
  {
    field: "email",
    headerName: "E-mail",
    flex: 1,
    editable: false,
  },
  {
    field: "groups",
    headerName: "Classes",
    flex: 1,
    renderCell: params =>
      params.value.map(g => (
        <Chip
          key={g.admin_group_ex_id}
          label={g.name}
          color="primary"
          variant="outlined"
          size="small"
          sx={{ marginRight: 1 }}
        />
      )),
  },
  {
    field: "action",
    headerName: "actions",
    type: "",
    renderCell: function EditAdminRowButton(params) {
      return <PanelTableEditButton resourceName="teachers" id={params.id} />
    },
  },
]

export default adminsTableColumns
