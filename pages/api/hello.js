import S3 from "aws-sdk/clients/s3"
import { Credentials } from "aws-sdk"
import { v4 as uuid } from "uuid"

const signedUrlExpireSeconds = 60 * 15

const access = new Credentials({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
})

const s3 = new S3({
  credentials: access,
  region: process.env.S3_REGION,
  signatureVersion: "v4",
})

export default async function handler(req, res) {
  try {
    const fileId = uuid()
    const url = await s3.getSignedUrlPromise("putObject", {
      Bucket: process.env.S3_BUCKET,
      Key: `${fileId}.jpg`,
      ContentType: "image/jpeg",
      Expires: signedUrlExpireSeconds,
    })
    res.status(200).json({ url })
  } catch (error) {
    res.status(500).json({ error })
  }
}
