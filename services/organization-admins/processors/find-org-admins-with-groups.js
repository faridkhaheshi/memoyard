import db from "../../../adapters/db"

const findOrgAdminsWithGroups = async ({ userExId, orgSlug }) => {
  const { records: organizationAdmins } = await db.query(
    `
      SELECT
        oa.ex_id,
        oa.first_name,
        oa.last_name,
        uu.email,
        oa.active,
        oa.created_at,
        (
          SELECT
            COALESCE(
              TO_JSON(
                ARRAY_AGG(
                  JSON_BUILD_OBJECT(
                    'ex_id', g.ex_id,
                    'name', g.name,
                    'active', g.active,
                    'created_at', ag.created_at,
                    'admin_group_ex_id', ag.ex_id
                  )
                  ORDER BY ag.created_at ASC
                ) FILTER (WHERE g.id IS NOT NULL)
              ), '[]'::JSON
            )
          FROM
            yard.admin_groups ag
              JOIN yard.groups g ON ag.group_id=g.id
          WHERE
            ag.admin_id=oa.id
              AND
            ag.active=true
              AND
            g.active=true
        ) AS groups
      FROM
        yard.organization_admins oa
          JOIN yard.organizations o ON oa.org_id=o.id
          JOIN yard.users u ON o.creator_id=u.id
          JOIN yard.users uu ON oa.user_id=uu.id
      WHERE
        o.slug=:orgSlug
          AND
        u.ex_id::text=:userExId
          AND
        u.active=true
          AND
        uu.active=true
          AND
        o.active=true
      ORDER BY oa.created_at DESC
    `,
    { userExId, orgSlug }
  )

  return organizationAdmins.map(({ groups, ...rest }) => ({
    ...rest,
    groups: JSON.parse(groups),
  }))
}

export default findOrgAdminsWithGroups
