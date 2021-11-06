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
)
INSERT INTO
	yard.subject_listeners
    (
      creator_id,
      org_id,
      subject_id,
      user_id
    )
VALUES
	(
      (SELECT id FROM farid),
      (SELECT id FROM org),
      (SELECT id FROM subject),
      (SELECT id FROM farid)
    )