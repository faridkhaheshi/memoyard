CREATE TYPE media_tag_type AS ENUM ('group', 'subject');


CREATE TABLE IF NOT EXISTS yard.media_tags (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  creator_id                  int NOT NULL,
  org_id                      int NOT NULL,
  media_id                    int NOT NULL,
  media_tag_type              media_tag_type NOT NULL,
  group_id                    int,
  subject_id                  int,
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_media_tag_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  fk_media_tag_creator_id FOREIGN KEY(creator_id) REFERENCES yard.users(id),
  CONSTRAINT                  fk_media_tag_org_id FOREIGN KEY(org_id) REFERENCES yard.organizations(id),
  CONSTRAINT                  fk_media_tag_group_id FOREIGN KEY(group_id) REFERENCES yard.groups(id),
  CONSTRAINT                  fk_media_tag_subject_id FOREIGN KEY(subject_id) REFERENCES yard.subjects(id),
  CONSTRAINT                  group_id_or_subject_id CHECK (group_id IS NOT NULL OR subject_id IS NOT NULL)
);


CREATE TRIGGER set_media_tags_timestamp
  BEFORE UPDATE ON yard.media_tags
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();