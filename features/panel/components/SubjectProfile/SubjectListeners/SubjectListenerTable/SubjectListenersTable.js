import { useCallback } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Typography from "@mui/material/Typography"
import { useSubjectContext } from "../../../../contexts/subject"

const columns = [
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
    editable: true,
    flex: 1,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    description: "Mobile number of the parent",
    editable: true,
    flex: 1,
  },
]

const SubjectListenersTable = () => {
  const {
    subject,
    subject: { listeners },
  } = useSubjectContext()
  const handleSelectionModelChange = useCallback(selectionModel => {
    console.log(selectionModel)
  }, [])
  if (listeners.length === 0)
    return (
      <Typography>
        {`No information is added for ${subject?.name}'s parents.`}
      </Typography>
    )
  return (
    <DataGrid
      autoHeight
      checkboxSelection
      disableSelectionOnClick
      hideFooter
      components={{
        Toolbar: SubjectListerensTableToolbar,
      }}
      rows={listeners}
      columns={columns}
      getRowId={row => row.subject_listener_ex_id}
      onSelectionModelChange={handleSelectionModelChange}
    />
  )
}

export default SubjectListenersTable

function SubjectListerensTableToolbar() {
  return <div>Hi</div>
}
