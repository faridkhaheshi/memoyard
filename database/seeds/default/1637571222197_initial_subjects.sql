INSERT INTO 
  yard.subjects
  (
    name,
    creator_id,
    org_id
  )
VALUES 
  (
    'Tara',
    ( SELECT id FROM yard.users WHERE email = 'farid.khaheshi@gmail.com'),
    ( SELECT id FROM yard.organizations WHERE slug = 'fantasy')
  );