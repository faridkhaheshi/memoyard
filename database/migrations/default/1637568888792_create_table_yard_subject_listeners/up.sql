CREATE TABLE "yard"."subject_listeners" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "creator_id" integer NOT NULL, "org_id" integer NOT NULL, "subject_id" integer NOT NULL, "user_id" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("subject_id") REFERENCES "yard"."subjects"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("ex_id"));COMMENT ON TABLE "yard"."subject_listeners" IS E'Each row in this table represents a relationship between a subject and a user. This relationship means that the user is allowed to access the media related to the specified subject. For example in a daycare, each child (subject) may have two listeners (her parents).';
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
CREATE TRIGGER "set_yard_subject_listeners_updated_at"
BEFORE UPDATE ON "yard"."subject_listeners"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_subject_listeners_updated_at" ON "yard"."subject_listeners" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
