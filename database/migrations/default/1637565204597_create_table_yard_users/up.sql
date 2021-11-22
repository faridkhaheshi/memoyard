CREATE TABLE "yard"."users" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "first_name" text, "last_name" text, "email" citext, "mobile" text, "address" text, "address_2" text, "address_3" text, "postal_code" text, "city" text, "province" text, "country" text, "password_hash" text, "user_type" text NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_type") REFERENCES "yard"."user_types"("name") ON UPDATE restrict ON DELETE restrict, UNIQUE ("ex_id"), UNIQUE ("email"), UNIQUE ("mobile"), CONSTRAINT "mandatory_email_or_mobile" CHECK (email IS NOT NULL OR mobile IS NOT NULL), CONSTRAINT "email_validity" CHECK (email ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'));COMMENT ON TABLE "yard"."users" IS E'These are the users using memoyard. Everyone should be a user to work with memoyard.';
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
CREATE TRIGGER "set_yard_users_updated_at"
BEFORE UPDATE ON "yard"."users"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_users_updated_at" ON "yard"."users" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
