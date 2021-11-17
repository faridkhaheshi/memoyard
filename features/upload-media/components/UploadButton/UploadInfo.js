import Link from "next/link"

import styles from "./UploadInfo.module.scss"

const UploadInfo = ({ files, organization, dispatch }) => {
  const totalFiles = files.length
  const uploadedFiles = files.filter(
    file => file.uploadStatus === "UPLOADED"
  ).length
  return (
    <div className={styles.infoContainer}>
      <p>{`${uploadedFiles} of ${totalFiles} items uploaded`}</p>
      {uploadedFiles === totalFiles && (
        <div className={styles.linksContainer}>
          <Link href={`/${organization.slug}/albums`}>
            <a>Visit albums</a>
          </Link>
          |
          <a href="#" onClick={dispatch.bind(null, { type: "RESET" })}>
            Add more
          </a>
        </div>
      )}
    </div>
  )
}

export default UploadInfo
