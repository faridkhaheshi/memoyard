comment on column "yard"."user_types"."id" is E'This table contains all the types a user can assume';
alter table "yard"."user_types" alter column "id" set default nextval('yard.user_types_id_seq'::regclass);
alter table "yard"."user_types" alter column "id" drop not null;
alter table "yard"."user_types" add column "id" int4;
