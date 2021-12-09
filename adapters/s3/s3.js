import S3 from "aws-sdk/clients/s3"
import { Credentials } from "aws-sdk"

export const access = new Credentials({
  accessKeyId: process.env.MEM_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MEM_AWS_ACCESS_KEY_SECRET,
})

const s3 = new S3({
  credentials: access,
  region: process.env.MEM_S3_REGION,
  signatureVersion: "v4",
})

export default s3
