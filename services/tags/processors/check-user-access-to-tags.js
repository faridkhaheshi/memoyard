import { NotAuthorizedError } from "restify-errors"
import findUserTagsByUserExId from "./find-user-tags-by-user-ex-id"

const checkUserAccessToTags = async ({ user, organization, tags }) => {
  const userTags = await findUserTagsByUserExId({
    userExId: user.ex_id,
    slug: organization.slug,
  })

  const hasAccessToAllTags = tags.every(({ id, type }) =>
    type === "group"
      ? userTags.some(({ group_ex_id }) => id === group_ex_id)
      : userTags.some(({ subject_ex_id }) => id === subject_ex_id)
  )

  if (!hasAccessToAllTags)
    throw new NotAuthorizedError(
      "User does not have access to all tags requested"
    )
  return hasAccessToAllTags
}

export default checkUserAccessToTags
