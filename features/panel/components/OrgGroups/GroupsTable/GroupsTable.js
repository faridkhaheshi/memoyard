import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import useCellUpdate from "../../../hooks/use-cell-update"
import convertToLocalTime from "../../../../../utilities/date/convert-to-local-time"

const DEFAULT_PAGE_SIZE = 10
const PAGE_SIZE_OPTIONS = [10, 20]

const columns = [
  {
    field: "active",
    headerName: "active",
    description: "Shows the current status of the group",
    type: "boolean",
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    description: "Name of the group",
    flex: 1,
    editable: true,
  },
  {
    field: "join_date",
    headerName: "Joining Date",
    description: "Shows the date that the group was added",
    type: "dateTime",
    flex: 0.5,
    valueGetter: params =>
      convertToLocalTime(
        params.getValue(params.id, "created_at")
      ).toLocaleString(),
  },
]

const GroupsTable = ({ groups }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const handleCellUpdate = useCellUpdate("/api/groups")

  return (
    <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={groups}
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

export default GroupsTable
