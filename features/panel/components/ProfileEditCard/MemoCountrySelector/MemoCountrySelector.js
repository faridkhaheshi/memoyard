import { useCallback } from "react"
import useSWRImmutable from "swr/immutable"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export const countryListFetcher = (...args) =>
  fetch(...args)
    .then(res => res.json())
    .then(res => res.countries)

const MemoCountrySelector = ({ sx, id, value, onChange }) => {
  const { data: countries } = useSWRImmutable(
    "/api/countries",
    countryListFetcher
  )

  const handleChange = useCallback(
    e => {
      const { name, isoCode: code } = countries.find(
        c => c.name === e.target.value
      )
      onChange({ name, code })
    },
    [countries, onChange]
  )

  return (
    <FormControl sx={sx} margin="normal">
      <InputLabel id={`${id}-label`}>Country</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label="Country"
        value={value || ""}
        onChange={handleChange}
      >
        {!!countries &&
          countries.map(({ isoCode, name }) => (
            <MenuItem key={isoCode} value={name}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default MemoCountrySelector
