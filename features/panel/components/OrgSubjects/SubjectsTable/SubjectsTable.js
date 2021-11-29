import { DataGrid } from "@mui/x-data-grid"

const columns = [
  {
    field: "active",
    headerName: "active",
    description: "Shows the current status of the child",
    type: "boolean",
  },
  {
    field: "name",
    headerName: "Name",
    description: "Name of the child",
    flex: 1,
  },
  {
    field: "join_date",
    headerName: "Joining Dtae",
    description: "Shows the date that the child was added",
    type: "dateTime",
    flex: 0.5,
    valueGetter: params => new Date(params.getValue(params.id, "created_at")),
  },
]

const SubjectsTable = ({ subjects }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={subjects}
        columns={columns}
        getRowId={row => row.ex_id}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}

export default SubjectsTable
