import { useCallback } from "react"
import Box from "@mui/material/Box"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

const MultiGroupSelectorForm = ({
  sx = {},
  groups,
  selectedGroups,
  onChangeSelectedGroups,
}) => {
  const handleValueChange = useCallback(
    (groupExId, e) => {
      if (e.target.checked) {
        onChangeSelectedGroups([
          ...selectedGroups.filter(exId => exId !== groupExId),
          groupExId,
        ])
      } else {
        onChangeSelectedGroups(
          selectedGroups.filter(exId => exId !== groupExId)
        )
      }
    },
    [onChangeSelectedGroups, selectedGroups]
  )

  return (
    <Box
      sx={{
        color: "inherit",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        ...sx,
      }}
    >
      {groups.map(group => (
        <FormGroup key={group.ex_id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedGroups.indexOf(group.ex_id) > -1}
                onChange={handleValueChange.bind(null, group.ex_id)}
              />
            }
            label={group.name}
          />
        </FormGroup>
      ))}
    </Box>
  )
}

export default MultiGroupSelectorForm
