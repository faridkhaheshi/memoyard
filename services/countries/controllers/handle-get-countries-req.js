import { Country } from "country-state-city"
import config from "../../../config"

const { supportedCountries } = config

const handleGetCountriesReq = async (req, res) => {
  try {
    const countries = supportedCountries.map(code => {
      const { isoCode, name } = Country.getCountryByCode(code)
      return { isoCode, name }
    })
    return res.json({ countries })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetCountriesReq
