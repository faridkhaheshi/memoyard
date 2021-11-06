CREATE TABLE IF NOT EXISTS yard.subject_groups (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  creator_id                  int NOT NULL,
  org_id                      int NOT NULL,
  subject_id                  int NOT NULL,
  group_id                    int NOT NULL,
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_subject_group_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  fk_subject_group_creator FOREIGN KEY(creator_id) REFERENCES yard.users(id),
  CONSTRAINT                  fk_subject_group_org_id FOREIGN KEY(org_id) REFERENCES yard.organizations(id),
  CONSTRAINT                  fk_subject_group_subject_id FOREIGN KEY(subject_id) REFERENCES yard.subjects(id),
  CONSTRAINT                  fk_subject_group_group_id FOREIGN KEY(group_id) REFERENCES yard.groups(id)
);


CREATE TRIGGER set_subject_group_timestamp
  BEFORE UPDATE ON yard.subject_groups
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();