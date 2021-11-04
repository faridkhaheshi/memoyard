import createDB from "data-api-client"

const db = createDB({
  secretArn: process.env.MEM_AWS_DB_SECRET_ARN,
  resourceArn: process.env.MEM_AWS_DB_CLUSTER_ARN,
  database: process.env.MEM_DB_NAME,
  options: {
    region: process.env.MEM_S3_REGION,
    accessKeyId: process.env.MEM_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MEM_AWS_ACCESS_KEY_SECRET,
  },
})

export default db
