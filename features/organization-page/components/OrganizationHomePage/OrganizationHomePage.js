import { NextSeo } from "next-seo"
import CenteredForm from "../../../../components/CenteredForm"
import FullPageCentered from "../../../../components/FullPageCentered"
import OrganizationActions from "../OrganizationActions"
import OrganizationHomeLoading from "../OrganizationHomeLoading"

import styles from "./OrganizationHomePage.module.scss"

const OrganizationHomePage = ({ organization, loading = false }) => {
  if (loading) return <OrganizationHomeLoading organization={organization} />

  return (
    <FullPageCentered bgColor="skyBlue">
      <NextSeo title={organization.name} />
      <CenteredForm className={styles.cardContainer}>
        <h2 className={styles.title}>{organization.name}</h2>
        <p>Welcome!</p>
        <p>
          Here, you can add photos and videos. Parents will receive an email
          with a link to their personal albums.
        </p>
        <OrganizationActions organization={organization} />
      </CenteredForm>
    </FullPageCentered>
  )
}

export default OrganizationHomePage
