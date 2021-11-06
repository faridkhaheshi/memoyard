CREATE TABLE IF NOT EXISTS yard.subjects (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  name                        varchar(100),
  creator_id                  int NOT NULL,
  org_id                      int NOT NULL,
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_subject_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  unique_subject_name_per_org  UNIQUE(name, org_id),
  CONSTRAINT                  fk_subject_creator FOREIGN KEY(creator_id) REFERENCES yard.users(id),
  CONSTRAINT                  fk_subject_org_id FOREIGN KEY(org_id) REFERENCES yard.organizations(id)
);


CREATE TRIGGER set_subject_timestamp
  BEFORE UPDATE ON yard.subjects
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();