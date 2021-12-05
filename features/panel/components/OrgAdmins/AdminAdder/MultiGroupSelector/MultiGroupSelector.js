import MultiGroupSelectorForm from "./MultiGroupSelectorForm"
import Typography from "@mui/material/Typography"

import useOrgGroups from "../../../../hooks/use-org-groups"

const MultiGroupSelector = ({
  sx = {},
  selectedGroups,
  onChangeSelectedGroups = () => ({}),
}) => {
  const { groups } = useOrgGroups()

  if (!groups || groups.length === 0) return null

  return (
    <>
      <Typography color="text.secondary" mt={4} mb={2}>
        Classes*:
      </Typography>
      <MultiGroupSelectorForm
        sx={sx}
        groups={groups}
        onChangeSelectedGroups={onChangeSelectedGroups}
        selectedGroups={selectedGroups}
      />
      <Typography variant="caption" component="small">
        * The teacher will be able to post photos/videos to the classes marked
        above. You can always modify this later.
      </Typography>
    </>
  )
}

export default MultiGroupSelector
