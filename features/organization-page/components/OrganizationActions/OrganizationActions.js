import Link from "next/link"
import styles from "./OrganizationActions.module.scss"

const OrganizationActions = ({ organization }) => (
  <ul className={styles.navLinksContainer}>
    <li>
      <Link href={`/${organization.slug}/add`}>
        <a>Add new photos</a>
      </Link>
    </li>
    |
    <li>
      <Link href={`/${organization.slug}/album`}>
        <a>View albums</a>
      </Link>
    </li>
  </ul>
)

export default OrganizationActions
