alter table "yard"."admin_groups" add constraint "admin_groups_admin_id_group_id_org_id_key" unique ("admin_id", "group_id", "org_id");
