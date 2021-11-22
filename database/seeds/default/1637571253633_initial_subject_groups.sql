WITH farid AS (
  SELECT id FROM yard.users
  WHERE email='farid.khaheshi@gmail.com'
),
org AS (
  SELECT yard.organizations.id AS id
  FROM farid LEFT JOIN yard.organizations ON farid.id=yard.organizations.creator_id
  WHERE yard.organizations.slug='fantasy'
),
subject AS (
  SELECT yard.subjects.id AS id
  FROM org LEFT JOIN yard.subjects ON org.id=yard.subjects.org_id
  WHERE yard.subjects.name='Tara' LIMIT 1
),
grp AS (
  SELECT yard.groups.id as id
  FROM org LEFT JOIN yard.groups ON org.id=yard.groups.org_id
  WHERE yard.groups.name='toddlers' LIMIT 1
)
INSERT INTO
	yard.subject_groups
    (
      creator_id,
      org_id,
      subject_id,
      group_id
    )
VALUES
	(
      (SELECT id FROM farid),
      (SELECT id FROM org),
      (SELECT id FROM subject),
      (SELECT id FROM grp)
    )