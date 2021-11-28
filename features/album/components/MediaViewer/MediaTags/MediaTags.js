import styles from "./MediaTags.module.scss"

const MediaTags = ({ tags }) => (
  <div className={styles.tagsContainer}>
    {tags.map(t => (
      <div className={styles.tag} key={t.ex_id}>
        {t.name}
      </div>
    ))}
  </div>
)

export default MediaTags
