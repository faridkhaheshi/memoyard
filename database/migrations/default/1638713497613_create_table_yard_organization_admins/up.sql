CREATE TABLE "yard"."organization_admins" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "first_name" text, "last_name" text, "org_id" integer NOT NULL, "user_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "creator_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "yard"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("ex_id"), UNIQUE ("user_id", "org_id"));COMMENT ON TABLE "yard"."organization_admins" IS E'This table holds the edges of the organization->admin relationship';
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
CREATE TRIGGER "set_yard_organization_admins_updated_at"
BEFORE UPDATE ON "yard"."organization_admins"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_organization_admins_updated_at" ON "yard"."organization_admins" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
