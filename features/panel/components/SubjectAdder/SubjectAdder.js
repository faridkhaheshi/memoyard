import { useState } from "react"

import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"
import { usePanelContext } from "../../contexts/panel"
import useAssetCreate from "../../hooks/use-asset-create"

const SubjectAdder = ({ refresh }) => {
  const { slug } = usePanelContext()
  const [name, setName] = useState("")

  const { handleSubmit } = useAssetCreate({
    baseApiPath: "/api/subjects",
    body: {
      orgSlug: slug,
      subjectInfo: { name },
    },
    onSuccess: () => {
      setName("")
      refresh()
    },
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "20px 0",
      }}
    >
      <TextField
        sx={{ marginRight: "20px" }}
        value={name}
        onChange={e => setName(e.target.value)}
        required
        id="filled-required"
        label="Name"
        placeholder="type name of the child"
        variant="filled"
      />
      <LoadingButton variant="contained" onClick={handleSubmit}>{`ADD ${
        name.length === 0 ? "a new child" : name
      }`}</LoadingButton>
    </div>
  )
}

export default SubjectAdder
