CREATE TABLE "yard"."tickets" ("id" serial NOT NULL, "ex_id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" integer NOT NULL, "code" text NOT NULL, "expired_at" bigint NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "yard"."users"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("ex_id"), UNIQUE ("user_id"));COMMENT ON TABLE "yard"."tickets" IS E'This table contains tickets to enable users log in with OTPs';
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
CREATE TRIGGER "set_yard_tickets_updated_at"
BEFORE UPDATE ON "yard"."tickets"
FOR EACH ROW
EXECUTE PROCEDURE "yard"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_yard_tickets_updated_at" ON "yard"."tickets" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
