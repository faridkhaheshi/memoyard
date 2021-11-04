import db from "./../../adapters/db"

export default async function handler(req, res) {
  try {
    const result = await db.query(
      "select COUNT(*) from information_schema.tables;"
    )
    return res.json({ result })
  } catch (err) {
    console.error(err)
    return res.json({ hi: false })
  }
}
