CREATE TABLE "yard"."group_admins" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "first_name" text, "last_name" text, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "user_id" integer NOT NULL, "group_id" integer NOT NULL, "org_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("group_id") REFERENCES "yard"."groups"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "yard"."users"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("ex_id"), UNIQUE ("user_id", "group_id", "org_id"));COMMENT ON TABLE "yard"."group_admins" IS E'This table contains the edges for the group-admin <-> user relationship';
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
CREATE TRIGGER "set_yard_group_admins_updated_at"
BEFORE UPDATE ON "yard"."group_admins"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_group_admins_updated_at" ON "yard"."group_admins" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
