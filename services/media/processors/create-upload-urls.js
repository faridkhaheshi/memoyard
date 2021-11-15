import s3 from "../../../adapters/s3"
import { v4 as uuid } from "uuid"

const signedUrlExpireSeconds = 60 * 60

const createUploadUrls = async ({ files, organization: { ex_id: orgExId } }) =>
  Promise.all(
    files.map(file =>
      s3.getSignedUrlPromise("putObject", {
        Bucket: process.env.MEM_S3_BUCKET,
        Key: `${orgExId}/${uuid()}${file.name.match(/\.[0-9a-z]+$/i)[0]}`,
        ContentType: file.type,
        Expires: signedUrlExpireSeconds,
      })
    )
  )

export default createUploadUrls
