DROP TRIGGER IF EXISTS set_media_tags_timestamp ON yard.media_tags CASCADE;
DROP TABLE IF EXISTS yard.media_tags;
DROP TYPE IF EXISTS media_tag_type;