INSERT INTO 
  yard.organizations
  (
    name,
    slug,
    creator_id
  )
VALUES 
  (
    'Fantasy Daycare',
    'fantasy',
    ( SELECT id FROM yard.users WHERE email = 'farid.khaheshi@gmail.com')
  );