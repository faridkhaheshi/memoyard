CREATE TABLE IF NOT EXISTS yard.organizations (
  id                          serial NOT NULL PRIMARY KEY,
  ex_id                       uuid NOT NULL DEFAULT uuid_generate_v4(),
  name                        varchar(200),
  slug                        text,
  creator_id                  int NOT NULL,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT                  unique_organization_ex_id  UNIQUE(ex_id),
  CONSTRAINT                  unique_organization_slug  UNIQUE(slug),
  CONSTRAINT                  fk_creator FOREIGN KEY(creator_id) REFERENCES yard.users(id)
);


CREATE TRIGGER set_organizations_timestamp
  BEFORE UPDATE ON yard.organizations
  FOR EACH ROW
  EXECUTE PROCEDURE yard.trigger_set_timestamp();