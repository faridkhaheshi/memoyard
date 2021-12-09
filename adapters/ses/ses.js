import { SES } from "aws-sdk"
import config from "../../config"

const sesClient = new SES({
  accessKeyId: process.env.MEM_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MEM_AWS_ACCESS_KEY_SECRET,
  region: process.env.MEM_S3_REGION,
})

export const sendEmail = ({
  to,
  text,
  html,
  subject,
  from = config.email.fromAddress,
}) =>
  sesClient
    .sendEmail({
      Source: from,
      Destination: {
        ToAddresses: Array.isArray(to) ? to : [to],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: html || text,
          },
          Text: {
            Charset: "UTF-8",
            Data: text,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject || text,
        },
      },
    })
    .promise()

export default sesClient
