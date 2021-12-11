import { NotAuthorizedError } from "restify-errors"
import { findUserObservableTags } from "."

const checkUserAccessToTags = async ({ user, organization, tags }) => {
  const userTags = await findUserObservableTags({
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

  return tags.map(({ id, type }) =>
    type === "group"
      ? userTags.find(({ group_ex_id }) => group_ex_id === id)
      : userTags.find(({ subject_ex_id }) => subject_ex_id === id)
  )
}

export default checkUserAccessToTags
