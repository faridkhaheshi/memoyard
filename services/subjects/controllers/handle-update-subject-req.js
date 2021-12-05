import { updateOrgSubject } from "../processors"

const handleUpdateSubjectReq = async (req, res) => {
  try {
    const {
      query: { subjectExId },
      user: { ex_id: userExId },
      body: { name, active, groupExId },
    } = req
    const subject = await updateOrgSubject({
      subjectExId,
      update: { name, active },
      userExId,
      groupExId,
    })
    return res.json({
      done: true,
      subject,
    })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleUpdateSubjectReq
