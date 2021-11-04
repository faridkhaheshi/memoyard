export default async function handler(req, res) {
  return res.send(process.env.NODE_ENV)
}
