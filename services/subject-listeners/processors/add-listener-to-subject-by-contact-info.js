import db from "../../../adapters/db"

const addListenerToSubjectByContactInfo = async ({
  userExId,
  subjectExId,
  orgSlug,
  subjectListenerInfo: { email, firstName, lastName, userType = "normal" },
}) => {
  const results = await db
    .transaction()
    .query(
      `
        WITH new_user AS (
          INSERT INTO
            yard.users (email, user_type, first_name, last_name)
          SELECT :email, :userType, :firstName, :lastName
          WHERE NOT EXISTS ( SELECT * FROM yard.users u WHERE u.email=:email LIMIT 1)
          RETURNING *
        )
        SELECT * FROM new_user
          UNION
        SELECT * FROM  yard.users u WHERE u.email = :email LIMIT 1;
      `,
      { email, userType, firstName, lastName }
    )
    .query(({ records }) => [
      `
          INSERT INTO 
            yard.subject_listeners (
              user_id,
              subject_id,
              org_id,
              creator_id,
              first_name,
              last_name
            )
          VALUES (
            :userId,
            (
              SELECT
                s.id
              FROM 
                yard.subjects s
                  JOIN yard.organizations o ON s.org_id=o.id
              WHERE 
                s.ex_id::text=:subjectExId
                  AND
                o.slug=:orgSlug
              LIMIT 1
            ),
            (
              SELECT 
                o.id 
              FROM
                yard.organizations o
                  JOIN yard.users u ON o.creator_id=u.id
              WHERE 
                o.slug::text=:orgSlug
                  AND
                u.ex_id::text=:userExId
              LIMIT 1
            ),
            ( SELECT u.id FROM yard.users u WHERE u.ex_id::text=:userExId LIMIT 1),
            :firstName,
            :lastName
          )
          RETURNING 
            ex_id,
            active,
            first_name,
            last_name,
            created_at,
            updated_at
      `,
      {
        userId: records[0].id,
        subjectExId,
        orgSlug,
        userExId,
        firstName,
        lastName,
      },
    ])
    .commit()
  return results[1].records[0]
}

export default addListenerToSubjectByContactInfo
