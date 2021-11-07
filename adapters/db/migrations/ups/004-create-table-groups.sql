CREATE TABLE IF NOT EXISTS yard.groups (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  name                        varchar(100),
  creator_id                  int NOT NULL,
  org_id                      int NOT NULL,
  active                      boolean NOT NULL DEFAULT true,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_group_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  unique_group_name_per_org  UNIQUE(name, org_id),
  CONSTRAINT                  fk_group_creator FOREIGN KEY(creator_id) REFERENCES yard.users(id),
  CONSTRAINT                  fk_group_org_id FOREIGN KEY(org_id) REFERENCES yard.organizations(id)
);


CREATE TRIGGER set_group_timestamp
  BEFORE UPDATE ON yard.groups
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();