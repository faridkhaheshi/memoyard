CREATE TABLE "yard"."subjects" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "creator_id" integer NOT NULL, "org_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("ex_id"));COMMENT ON TABLE "yard"."subjects" IS E'These are the final targets for receiving the media in memoyard. For example in a daycare we have one subject for every child.';
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
CREATE TRIGGER "set_yard_subjects_updated_at"
BEFORE UPDATE ON "yard"."subjects"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_subjects_updated_at" ON "yard"."subjects" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
