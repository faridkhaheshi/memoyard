CREATE TABLE "yard"."subject_groups" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "creator_id" integer NOT NULL, "org_id" integer NOT NULL, "subject_id" integer NOT NULL, "group_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("subject_id") REFERENCES "yard"."subjects"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("group_id") REFERENCES "yard"."groups"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("ex_id"));COMMENT ON TABLE "yard"."subject_groups" IS E'Each row in this table represents a relationship between a subject and a group. This means that the specified subject belongs to the group.';
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
CREATE TRIGGER "set_yard_subject_groups_updated_at"
BEFORE UPDATE ON "yard"."subject_groups"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_subject_groups_updated_at" ON "yard"."subject_groups" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
