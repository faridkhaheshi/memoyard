import { DataGrid } from "@mui/x-data-grid"

const columns = [
  {
    field: "active",
    headerName: "active",
    type: "boolean",
  },
  {
    field: "name",
    headerName: "Name",
    description: "Name of the child",
    flex: 0.5,
  },
]

const SubjectGroupsTable = ({ groups }) => {
  return (
    <div>
      <div>
        <DataGrid
          autoHeight
          rows={groups}
          columns={columns}
          getRowId={row => row.ex_id}
        />
      </div>
    </div>
  )
}

export default SubjectGroupsTable
