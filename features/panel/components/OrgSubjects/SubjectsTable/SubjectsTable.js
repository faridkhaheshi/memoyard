import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import useCellUpdate from "../../../hooks/use-cell-update"
import subjectTableColumns from "./subjects-table-columns"

const DEFAULT_PAGE_SIZE = 10
const PAGE_SIZE_OPTIONS = [10, 20, 50]

const SubjectsTable = ({ subjects }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const handleCellUpdate = useCellUpdate("/api/subjects")

  return (
    <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          autoHeight
          rows={subjects}
          columns={subjectTableColumns}
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
