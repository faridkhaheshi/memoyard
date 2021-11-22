CREATE TABLE "yard"."organizations" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "slug" text NOT NULL, "active" boolean NOT NULL DEFAULT true, "creator_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"), UNIQUE ("ex_id"), UNIQUE ("slug"));COMMENT ON TABLE "yard"."organizations" IS E'These are the organizations using memoyard';
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
CREATE TRIGGER "set_yard_organizations_updated_at"
BEFORE UPDATE ON "yard"."organizations"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_organizations_updated_at" ON "yard"."organizations" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
