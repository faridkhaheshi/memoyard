import { URL } from "url"
import { getSignedUrl } from "aws-cloudfront-sign"

const expireInMs = 5 * 60 * 1000

const privateKeyString = Buffer.from(
  process.env.MEM_CLOUDFRONT_PRIVATE_KEY_STRING_BASE64,
  "base64"
).toString("utf-8")

const allowMediaView = mediaUrl =>
  getSignedUrl(
    `${process.env.MEM_CLOUDFRONT_HOST}${new URL(mediaUrl).pathname}`,
    {
      keypairId: process.env.MEM_CLOUDFRONT_PUBLIC_KEY_ID,
      privateKeyString,
      expireTime: new Date().getTime() + expireInMs,
    }
  )

export default allowMediaView
