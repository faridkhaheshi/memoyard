import { useReducer, useEffect } from "react"
import useSWRImmutable from "swr/immutable"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import { useAuth } from "../../../../contexts/auth"
import userProfileReducer from "./user-profile-reducer"
import MemoCountrySelector, { countryListFetcher } from "./MemoCountrySelector"
import MemoStateSelector, { stateListFetcher } from "./MemoStateSelector"
import MemoCitySelector, { cityListFetcher } from "./MemoCitySelector"

const ProfileEditCard = () => {
  const { user } = useAuth()
  const [state, dispatch] = useReducer(userProfileReducer, {
    updatedUser: user,
    selectedCountryCode: null,
    selectedProvinceCode: null,
  })
  console.log(state)

  const { data: countries } = useSWRImmutable(
    "/api/countries",
    countryListFetcher
  )

  const { data: states } = useSWRImmutable(
    state.selectedCountryCode
      ? `/api/states?country=${state.selectedCountryCode}`
      : null,
    stateListFetcher
  )

  useEffect(() => {
    if (countries && !state.selectedCountryCode && state.updatedUser.country) {
      console.log("updating selectedCountryCode")
      dispatch({
        type: "update-selected-country-code",
        payload: countries.find(c => c.name === state.updatedUser.country)[
          "isoCode"
        ],
      })
    }
  }, [
    state.selectedCountryCode,
    state.updatedUser.country,
    countries,
    dispatch,
  ])

  useEffect(() => {
    if (states && !state.selectedProvinceCode && !!state.updatedUser.province) {
      console.log("updating selectedProvinceCode")
      dispatch({
        type: "update-selected-province-code",
        payload: states.find(s => s.name === state.updatedUser.province)[
          "isoCode"
        ],
      })
    }
  }, [state.selectedProvinceCode, state.updatedUser.province, states, dispatch])

  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography color="text.secondary" gutterBottom>
          Edit Profile
        </Typography>
        <TextField
          id="profile-first-name"
          label="First Name"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.first_name}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "first_name", value: e.target.value },
            })
          }
        />
        <TextField
          id="profile-last-name"
          label="Last Name"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.last_name}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "last_name", value: e.target.value },
            })
          }
        />
        <TextField
          disabled
          type="email"
          id="profile-email"
          label="Email"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.email}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "email", value: e.target.value },
            })
          }
        />
        <TextField
          type="tel"
          id="profile-phone"
          label="Mobile #"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.mobile}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "mobile", value: e.target.value },
            })
          }
        />
        <TextField
          id="profile-address"
          label="Address Line 1"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.address}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "address", value: e.target.value },
            })
          }
        />
        <TextField
          id="profile-address-2"
          label="Address Line 2"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.address_2}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "address_2", value: e.target.value },
            })
          }
        />
        <TextField
          id="profile-address-3"
          label="Address Line 3"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
          value={state.updatedUser.address_3}
          onChange={e =>
            dispatch({
              type: "update",
              payload: { field: "address_3", value: e.target.value },
            })
          }
        />
        <MemoCountrySelector
          sx={{ minWidth: 300 }}
          id="profile-country"
          value={state.updatedUser.country}
          onChange={({ name, code }) =>
            dispatch({
              type: "update-country",
              payload: { name, code },
            })
          }
        />
        <MemoStateSelector
          id="profile-state"
          sx={{ minWidth: 300 }}
          selectedCountryCode={state.selectedCountryCode}
          value={state.updatedUser.province}
          onChange={({ name, code }) =>
            dispatch({ type: "update-province", payload: { name, code } })
          }
        />
        <MemoCitySelector
          sx={{ minWidth: 300 }}
          id="profile-city"
          selectedProvinceCode={state.selectedProvinceCode}
          selectedCountryCode={state.selectedCountryCode}
          value={state.updatedUser.city}
          onChange={({ name }) =>
            dispatch({ type: "update-city", payload: { name } })
          }
        />
        <TextField
          id="profile-zip-code"
          label="ZIP code"
          variant="standard"
          margin="normal"
          sx={{ minWidth: 300 }}
        />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color="inherit">Cancel</Button>
        <Button variant="contained">Save</Button>
      </CardActions>
    </Card>
  )
}

export default ProfileEditCard
