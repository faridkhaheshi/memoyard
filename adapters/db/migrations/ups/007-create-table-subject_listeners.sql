CREATE TABLE IF NOT EXISTS yard.subject_listeners (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  creator_id                  int NOT NULL,
  org_id                      int NOT NULL,
  subject_id                  int NOT NULL,
  user_id                     int NOT NULL,
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_subject_listener_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  fk_subject_listener_creator FOREIGN KEY(creator_id) REFERENCES yard.users(id),
  CONSTRAINT                  fk_subject_listener_org_id FOREIGN KEY(org_id) REFERENCES yard.organizations(id),
  CONSTRAINT                  fk_subject_listener_subject_id FOREIGN KEY(subject_id) REFERENCES yard.subjects(id),
  CONSTRAINT                  fk_subject_listener_user_id FOREIGN KEY(user_id) REFERENCES yard.users(id)
);


CREATE TRIGGER set_subject_listener_timestamp
  BEFORE UPDATE ON yard.subject_listeners
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();