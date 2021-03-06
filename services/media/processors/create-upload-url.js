import S3 from "aws-sdk/clients/s3"
import { Credentials } from "aws-sdk"
import { v4 as uuid } from "uuid"

const signedUrlExpireSeconds = 60 * 60

const access = new Credentials({
  accessKeyId: process.env.MEM_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MEM_AWS_ACCESS_KEY_SECRET,
})

const s3 = new S3({
  credentials: access,
  region: process.env.MEM_S3_REGION,
  signatureVersion: "v4",
})

const createUploadUrl = async ({ fileName, fileType, fileSize }) => {
  const fileId = uuid()
  const fileExtension = fileName.match(/\.[0-9a-z]+$/i)[0]
  const url = await s3.getSignedUrlPromise("putObject", {
    Bucket: process.env.MEM_S3_BUCKET,
    Key: `${fileId}${fileExtension}`,
    ContentType: fileType,
    Expires: signedUrlExpireSeconds,
  })

  return url
}

export default createUploadUrl
