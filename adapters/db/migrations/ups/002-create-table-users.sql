CREATE TYPE user_type AS ENUM ('normal', 'superadmin');

CREATE TABLE IF NOT EXISTS yard.users (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  first_name                  varchar(100),
  last_name                   varchar(100),
  email                       email,
  mobile                      varchar(25),
  address                     text,
  address_2                   text,
  address_3                   text,
  postal_code                 varchar(20),
  city                        text,
  province                    text,
  country                     text,
  password_hash               text,
  user_type                   user_type NOT NULL DEFAULT 'normal',
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_user_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  unique_user_email  UNIQUE(email),
  CONSTRAINT                  unique_user_mobile  UNIQUE(mobile),
  CONSTRAINT                  email_or_mobile CHECK (email IS NOT NULL OR mobile IS NOT NULL)
);

CREATE TRIGGER set_uers_timestamp
  BEFORE UPDATE ON yard.users
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();