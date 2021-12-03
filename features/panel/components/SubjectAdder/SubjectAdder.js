import { useState } from "react"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import LoadingButton from "@mui/lab/LoadingButton"
import { usePanelContext } from "../../contexts/panel"
import useAssetCreate from "../../hooks/use-asset-create"
import MemoError from "../../../../components/MemoError"
import GroupSelector from "../OrgSubjects/GroupSelector"

const SubjectAdder = ({ refresh }) => {
  const { slug } = usePanelContext()
  const [name, setName] = useState("")
  const [groupExId, setGroupExId] = useState("")

  const { handleSubmit, isLoading, errorMessage } = useAssetCreate({
    baseApiPath: "/api/subjects",
    body: {
      orgSlug: slug,
      subjectInfo: { name },
      groupExId,
    },
    onSuccess: result => {
      setName("")
      setGroupExId("")
      refresh()
    },
  })

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "10px 0",
        }}
      >
        <TextField
          sx={{ marginRight: "10px" }}
          value={name}
          onChange={e => setName(e.target.value)}
          required
          id="new-child-name"
          label="Name"
          placeholder="enter name of the child"
          variant="filled"
        />
        <GroupSelector
          required
          sx={{ minWidth: 300, marginRight: "10px" }}
          id="new-child-group"
          value={groupExId}
          onChange={e => setGroupExId(e.target.value)}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loading={isLoading}
        >{`ADD ${name.length === 0 ? "a new child" : name}`}</LoadingButton>
      </Box>
      <MemoError errorMessage={errorMessage} style={{ marginBottom: 10 }} />
    </>
  )
}

export default SubjectAdder
