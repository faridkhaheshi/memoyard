import { useCallback } from "react"
import useSWRImmutable from "swr/immutable"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export const stateListFetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.states)

const MemoStateSelector = ({
  sx,
  id,
  value,
  onChange,
  selectedCountryCode,
}) => {
  const { data: states } = useSWRImmutable(
    selectedCountryCode ? `/api/states?country=${selectedCountryCode}` : null,
    stateListFetcher
  )

  const handleChange = useCallback(
    e => {
      const { name, isoCode: code } = states.find(
        s => s.name === e.target.value
      )
      onChange({ name, code })
    },
    [states, onChange]
  )

  return (
    <FormControl sx={sx} margin="normal">
      <InputLabel id={`${id}-label`}>Province/State</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label="Province/State"
        value={value || ""}
        onChange={handleChange}
      >
        {!!states &&
          states.map(({ isoCode, name }) => (
            <MenuItem key={isoCode} value={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default MemoStateSelector
