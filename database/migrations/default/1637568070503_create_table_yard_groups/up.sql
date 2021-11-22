CREATE TABLE "yard"."groups" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "creator_id" integer NOT NULL, "org_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"), UNIQUE ("ex_id"), UNIQUE ("name"));COMMENT ON TABLE "yard"."groups" IS E'Groups are the entities that define groups of subjects that can access a media. Like different classes in a daycare (toddlers, preschool, etc.)';
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
CREATE TRIGGER "set_yard_groups_updated_at"
BEFORE UPDATE ON "yard"."groups"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_groups_updated_at" ON "yard"."groups" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
