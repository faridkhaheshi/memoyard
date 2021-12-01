import { useState } from "react"

import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"
import { usePanelContext } from "../../contexts/panel"
import useAssetCreate from "../../hooks/use-asset-create"
import MemoError from "../../../../components/MemoError"

const SubjectAdder = ({ refresh }) => {
  const { slug } = usePanelContext()
  const [name, setName] = useState("")

  const { handleSubmit, isLoading, errorMessage } = useAssetCreate({
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
    <>
      <form
        onSubmit={handleSubmit}
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
          id="new-child-name"
          label="Name"
          placeholder="enter name of the child"
          variant="filled"
        />
        <LoadingButton variant="contained" loading={isLoading}>{`ADD ${
          name.length === 0 ? "a new child" : name
        }`}</LoadingButton>
      </form>
      <MemoError errorMessage={errorMessage} style={{ marginBottom: 10 }} />
    </>
  )
}

export default SubjectAdder
