import { City } from "country-state-city"
import { BadRequestError } from "restify-errors"
import config from "../../../config"

const { supportedCountries } = config

const handleGetCitiesReq = async (req, res) => {
  try {
    const {
      query: { country, state },
    } = req
    if (!supportedCountries.includes(country))
      throw new BadRequestError("Country Not Supported")
    const cities = City.getCitiesOfState(country, state).map(({ name }) => ({
      name,
    }))
    return res.json({ cities })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetCitiesReq
