CREATE TYPE media_type AS ENUM ('photo', 'video');


CREATE TABLE IF NOT EXISTS yard.media (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  creator_id                  int NOT NULL,
  org_id                      int NOT NULL,
  original_file_name          text,
  original_file_size          int,
  media_type                  media_type NOT NULL DEFAULT 'photo',
  file_type                   varchar(50),
  file_url                    text,
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_media_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  fk_media_creator_id FOREIGN KEY(creator_id) REFERENCES yard.users(id),
  CONSTRAINT                  fk_media_org_id FOREIGN KEY(org_id) REFERENCES yard.organizations(id)
);


CREATE TRIGGER set_media_timestamp
  BEFORE UPDATE ON yard.media
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();