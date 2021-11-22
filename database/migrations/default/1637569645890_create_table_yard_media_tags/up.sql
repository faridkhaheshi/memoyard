CREATE TABLE "yard"."media_tags" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "creator_id" integer NOT NULL, "org_id" integer NOT NULL, "media_id" integer NOT NULL, "media_tag_type" Text NOT NULL, "group_id" integer, "subject_id" integer, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("creator_id") REFERENCES "yard"."users"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("org_id") REFERENCES "yard"."organizations"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("media_id") REFERENCES "yard"."media"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("media_tag_type") REFERENCES "yard"."media_tag_types"("name") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("group_id") REFERENCES "yard"."groups"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("subject_id") REFERENCES "yard"."subjects"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("ex_id"), CONSTRAINT "group_id_OR_subject_id_mandatory" CHECK (group_id IS NOT NULL OR subject_id IS NOT NULL));COMMENT ON TABLE "yard"."media_tags" IS E'Each row in this table represent a tag for a specific media.';
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
CREATE TRIGGER "set_yard_media_tags_updated_at"
BEFORE UPDATE ON "yard"."media_tags"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_media_tags_updated_at" ON "yard"."media_tags" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
