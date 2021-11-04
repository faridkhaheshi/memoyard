import fs from "fs"

export default async function handler(req, res) {
  try {
    // const string = fs.readFileSync(
    //   "/Users/faridkhaheshi/work/repositories/memoyard/credentials/prod-privatekey-APKAJJ2J65SUBCYFTOJQ.pem",
    //   "utf8"
    // )
    // const base64 = Buffer.from(string).toString("base64")
    // const base64 = process.env.CLOUDFRONT_PRIVATE_KEY_STRING_BASE64
    // const pkey = Buffer.from(base64, "base64").toString("utf8")
    // console.log(base64)
    // return res.send(base64)
    return res.send("hi")
  } catch (err) {
    console.error(err)
    return res.json({ hi: false })
  }
}
