alter table "yard"."subject_groups" add constraint "subject_groups_org_id_subject_id_group_id_key" unique ("org_id", "subject_id", "group_id");
