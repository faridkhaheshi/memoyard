import createDB from "data-api-client"

const db = createDB({
  secretArn: process.env.AWS_DB_SECRET_ARN,
  resourceArn: process.env.AWS_DB_CLUSTER_ARN,
  database: process.env.DB_NAME,
  options: {
    region: process.env.S3_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  },
})

export default db
