import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import adminsTableColumns from "./admins-table-columns"

const DEFAULT_PAGE_SIZE = 10
const PAGE_SIZE_OPTIONS = [10, 20, 50]

const AdminsTable = ({ admins }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)

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
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default AdminsTable
