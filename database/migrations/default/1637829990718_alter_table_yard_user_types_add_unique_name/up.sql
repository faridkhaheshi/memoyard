alter table "yard"."user_types" drop constraint "user_types_id_key";
alter table "yard"."user_types" add constraint "user_types_name_key" unique ("name");
