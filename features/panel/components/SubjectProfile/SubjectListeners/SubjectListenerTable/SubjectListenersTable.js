import { useCallback } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Typography from "@mui/material/Typography"
import { useSubjectContext } from "../../../../contexts/subject"
import useCellUpdate from "../../../../hooks/use-cell-update"

const columns = [
  {
    field: "active",
    headerName: "active",
    description: "Shows the current status of the parent",
    type: "boolean",
    editable: true,
  },
  {
    field: "first_name",
    headerName: "First Name",
    description: "First name of the parent",
    editable: true,
    flex: 1,
  },
  {
    field: "last_name",
    headerName: "Last Name",
    description: "Last name of the parent",
    editable: true,
    flex: 1,
  },
  {
    field: "email",
    headerName: "E-mail",
    description: "Email address of the parent",
    flex: 1,
  },
]

const SubjectListenersTable = () => {
  const {
    subject,
    subject: { listeners },
  } = useSubjectContext()

  const handleCellUpdate = useCellUpdate(`/api/subject-listeners`)

  if (listeners.length === 0)
    return (
      <Typography>
        {`No information is added for ${subject?.name}'s parents.`}
      </Typography>
    )
  return (
    <DataGrid
      autoHeight
      disableSelectionOnClick
      hideFooter
      rows={listeners}
      columns={columns}
      getRowId={row => row.subject_listener_ex_id}
      onCellEditCommit={handleCellUpdate}
    />
  )
}

export default SubjectListenersTable

function SubjectListerensTableToolbar() {
  return <div>Hi</div>
}
