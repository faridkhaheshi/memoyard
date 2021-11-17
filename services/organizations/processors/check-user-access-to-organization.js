import { NotAuthorizedError } from "restify-errors"
import findUserOrganizationsByUserExId from "./find-user-organizations-by-user-ex-id"

const checkUserAccessToOrganization = async ({ user, organization }) => {
  const userOrgs = await findUserOrganizationsByUserExId(user.ex_id, {
    slug: organization.slug,
  })

  if (userOrgs.length < 1)
    throw new NotAuthorizedError(
      `User is not authorized to add media to the organization with slug ${organization.slug}`
    )
  return userOrgs[0]
}

export default checkUserAccessToOrganization
