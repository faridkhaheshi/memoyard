import cfsign from "aws-cloudfront-sign"

const expireInMs = 5 * 60 * 1000

const allowMediaView = mediaUrl =>
  cfsign.getSignedUrl(mediaUrl, {
    keypairId: process.env.CLOUDFRONT_PUBLIC_KEY_ID,
    privateKeyPath: process.env.CLOUDFRONT_PRIVATE_KEY_PATH,
    expireTime: new Date().getTime() + expireInMs,
  })

export default allowMediaView
