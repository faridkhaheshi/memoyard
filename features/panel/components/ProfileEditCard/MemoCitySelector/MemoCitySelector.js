import { useCallback } from "react"
import useSWRImmutable from "swr/immutable"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export const cityListFetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.cities)

const MemoCitySelector = ({
  sx,
  id,
  selectedCountryCode,
  selectedProvinceCode,
  value,
  onChange,
}) => {
  const { data: cities } = useSWRImmutable(
    selectedCountryCode && selectedProvinceCode
      ? `/api/cities?country=${selectedCountryCode}&state=${selectedProvinceCode}`
      : null,
    cityListFetcher
  )
  const handleChange = useCallback(
    e => {
      onChange({ name: e.target.value })
    },
    [onChange]
  )

  return (
    <FormControl sx={sx} margin="normal">
      <InputLabel id={`${id}-label`}>City</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label="City"
        value={value || ""}
        onChange={handleChange}
      >
        {!!cities &&
          cities.map(({ name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default MemoCitySelector
