import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Chip from "@mui/material/Chip"
import useCellUpdate from "../../../hooks/use-cell-update"
import convertToLocalTime from "../../../../../utilities/date/convert-to-local-time"

const DEFAULT_PAGE_SIZE = 10
const PAGE_SIZE_OPTIONS = [10, 20, 50]

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
]

const SubjectsTable = ({ subjects }) => {
  console.log(subjects)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const handleCellUpdate = useCellUpdate("/api/subjects")

  return (
    <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={subjects}
          columns={columns}
          getRowId={row => row.ex_id}
          onCellEditCommit={handleCellUpdate}
          pageSize={pageSize}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          rowsPerPageOptions={PAGE_SIZE_OPTIONS}
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default SubjectsTable
