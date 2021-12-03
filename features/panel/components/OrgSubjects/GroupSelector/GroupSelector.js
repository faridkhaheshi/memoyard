import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import useOrgGroups from "../../../hooks/use-org-groups"

const GroupSelector = ({
  sx,
  id,
  value,
  onChange,
  label = "Class",
  required = false,
}) => {
  const { groups } = useOrgGroups()

  return (
    <FormControl sx={sx}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        required={required}
        labelId={`${id}-label`}
        id={id}
        label={label}
        value={value || ""}
        onChange={onChange}
      >
        {!!groups &&
          groups.map(({ ex_id, name }) => (
            <MenuItem key={ex_id} value={ex_id}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default GroupSelector
