import { DataGrid } from "@mui/x-data-grid"
import useCellUpdate from "../../../hooks/use-cell-update"

const columns = [
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
    flex: 1,
    editable: true,
  },
  {
    field: "join_date",
    headerName: "Joining Date",
    description: "Shows the date that the child was added",
    type: "dateTime",
    flex: 0.5,
    valueGetter: params => new Date(params.getValue(params.id, "created_at")),
  },
]

const SubjectsTable = ({ subjects }) => {
  const handleCellUpdate = useCellUpdate("/api/subjects")

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={subjects}
          columns={columns}
          getRowId={row => row.ex_id}
          onCellEditCommit={handleCellUpdate}
          pageSize={10}
          rowsPerPageOptions={[10, 50, 100]}
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default SubjectsTable
