import db from "../../../adapters/db"

const addMediaWithTags = async ({
  media: {
    originalFileName,
    originalFilelSize,
    mediaType,
    fileType,
    fileUrl,
    userExId,
    orgExId,
  },
  tags = [],
}) => {
  const results = await db
    .transaction()
    .query(
      `
    INSERT INTO 
      yard.media (
        creator_id,
        org_id,
        original_file_name,
        original_file_size,
        media_type,
        file_type,
        file_url
      )
    VALUES (
      (SELECT id FROM yard.users WHERE ex_id::text=:userExId),
      (SELECT id FROM yard.organizations WHERE ex_id::text=:orgExId),
      :originalFileName,
      :originalFilelSize,
      (SELECT name FROM yard.media_types WHERE name=:mediaType::text),
      :fileType,
      :fileUrl
    )
    RETURNING
      id,
      ex_id,
      file_url,
      file_type,
      media_type,
      original_file_size
  `,
      {
        userExId,
        orgExId,
        originalFileName,
        originalFilelSize,
        mediaType,
        fileType,
        fileUrl,
      }
    )
    .query(({ records }) =>
      tags.length > 0
        ? [
            `
      INSERT INTO 
        yard.media_tags (
          creator_id,
          org_id,
          media_id,
          media_tag_type,
          group_id,
          subject_id
        )
      VALUES (
        (SELECT id FROM yard.users WHERE ex_id::text=:userExId),
        (SELECT id FROM yard.organizations WHERE ex_id::text=:orgExId),
        :mediaId,
        (SELECT name FROM yard.media_tag_types mtt WHERE mtt.name=:mediaTagType::text),
        (SELECT id FROM yard.groups WHERE ex_id::text=:groupExId),
        (SELECT id FROM yard.subjects WHERE ex_id::text=:subjectExId)
      )
      RETURNING
        id
    `,
            tags.map(
              ({
                type: mediaTagType,
                group_ex_id: groupExId,
                subject_ex_id: subjectExId,
              }) => [
                {
                  mediaTagType,
                  groupExId,
                  subjectExId,
                  userExId,
                  orgExId,
                  mediaId: records[0].id,
                },
              ]
            ),
          ]
        : "SELECT 1"
    )
    .commit()
  return results[0].records[0]
}

export default addMediaWithTags
