CREATE TABLE "yard"."admin_groups" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "admin_id" integer NOT NULL, "group_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "creator_id" integer NOT NULL, "org_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("admin_id") REFERENCES "yard"."organization_admins"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("group_id") REFERENCES "yard"."groups"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("ex_id"));COMMENT ON TABLE "yard"."admin_groups" IS E'This table contains the edges for the admin->groups relationship';
CREATE OR REPLACE FUNCTION "yard"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_yard_admin_groups_updated_at"
BEFORE UPDATE ON "yard"."admin_groups"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_admin_groups_updated_at" ON "yard"."admin_groups" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
