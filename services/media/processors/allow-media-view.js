import { URL } from "url"
import { getSignedUrl } from "aws-cloudfront-sign"

const expireInMs = 5 * 60 * 1000

const allowMediaView = mediaUrl =>
  getSignedUrl(`${process.env.CLOUDFRONT_HOST}${new URL(mediaUrl).pathname}`, {
    keypairId: process.env.CLOUDFRONT_PUBLIC_KEY_ID,
    privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
    expireTime: new Date().getTime() + expireInMs,
  })

export default allowMediaView
