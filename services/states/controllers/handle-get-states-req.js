import { State } from "country-state-city"
import { BadRequestError } from "restify-errors"
import config from "../../../config"

const { supportedCountries } = config

const handleGetStatesReq = async (req, res) => {
  try {
    const {
      query: { country },
    } = req
    if (!supportedCountries.includes(country))
      throw new BadRequestError("Country Not Supported")
    const states = State.getStatesOfCountry(country).map(
      ({ name, isoCode }) => ({ name, isoCode })
    )
    return res.json({ states })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetStatesReq
