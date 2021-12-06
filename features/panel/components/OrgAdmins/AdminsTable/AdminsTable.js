import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Typography from "@mui/material/Typography"
import adminsTableColumns from "./admins-table-columns"
import useCellUpdate from "../../../hooks/use-cell-update"

const DEFAULT_PAGE_SIZE = 10
const PAGE_SIZE_OPTIONS = [10, 20, 50]

const AdminsTable = ({ admins }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)

  const handleCellUpdate = useCellUpdate("/api/organization-admins")

  if (admins.length === 0)
    return (
      <Typography component="p" mb={4}>
        You have no teachers in your school. Use the following form to add
        teachers.
      </Typography>
    )

  return (
    <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          autoHeight
          rows={admins}
          columns={adminsTableColumns}
          getRowId={row => row.ex_id}
          pageSize={pageSize}
          onPageSizeChange={newPageSize => setPageSize(newPageSize)}
          rowsPerPageOptions={PAGE_SIZE_OPTIONS}
          onCellEditCommit={handleCellUpdate}
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default AdminsTable
