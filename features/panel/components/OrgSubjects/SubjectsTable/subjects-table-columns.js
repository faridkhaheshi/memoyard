import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"
import convertToLocalTime from "../../../../../utilities/date/convert-to-local-time"
import MemoNextLink from "../../../../../components/MemoNextLink"

const subjectTableColumns = [
  {
    field: "active",
    headerName: "active",
    description: "Shows the current status of the child",
    type: "boolean",
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    description: "Name of the child",
    flex: 0.5,
    editable: true,
  },
  {
    field: "groups",
    headerName: "Class",
    flex: 1,
    renderCell: params =>
      params.value.map(g => (
        <Chip
          key={g.ex_id}
          label={g.name}
          color="primary"
          variant="outlined"
          size="small"
          sx={{ marginRight: 1 }}
        />
      )),
  },
  {
    field: "listeners",
    headerName: "Parents",
    flex: 1,
    renderCell: params =>
      params.value.map(p => (
        <Chip
          key={p.ex_id}
          label={`${p.first_name || ""} ${p.last_name || ""}`}
          color="primary"
          variant="outlined"
          size="small"
          sx={{ marginRight: 1 }}
        />
      )),
  },
  {
    field: "join_date",
    headerName: "Joining Date",
    description: "Shows the date that the child was added",
    type: "dateTime",
    flex: 0.5,
    valueGetter: params =>
      convertToLocalTime(
        params.getValue(params.id, "created_at")
      ).toLocaleString(),
  },
  {
    field: "action",
    headerName: "actions",
    type: "",
    renderCell: function EditRowButton(params) {
      return (
        <MemoNextLink href={`/fantasy/panel/kids/${params.id}`}>
          Edit
        </MemoNextLink>
      )
    },
  },
]

export default subjectTableColumns
