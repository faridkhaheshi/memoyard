import { BadRequestError } from "restify-errors"
import findOrganizationBySlug from "../processors/find-organization-by-slug"

const handleGetOrganizationBySlugRequest = async (req, res) => {
  try {
    const {
      query: { slug },
    } = req
    if (!slug) throw new BadRequestError("Slug is not provided")
    const organization = await findOrganizationBySlug(slug)
    return res.json({ organization })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleGetOrganizationBySlugRequest
