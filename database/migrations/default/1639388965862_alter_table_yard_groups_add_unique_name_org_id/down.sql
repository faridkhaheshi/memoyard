alter table "yard"."groups" drop constraint "groups_name_org_id_key";
alter table "yard"."groups" add constraint "groups_name_key" unique ("name");
