import { updateOrgSubjectListener } from "../processors"

const handleUpdateSubjectListenerReq = async (req, res) => {
  try {
    const {
      query: { subjectListenerExId },
      user: { ex_id: userExId },
      body: { first_name, last_name, active },
    } = req

    const subjectListener = await updateOrgSubjectListener({
      subjectListenerExId,
      update: { first_name, last_name, active },
      userExId,
    })

    return res.json({ done: true, subjectListener })
  } catch (err) {
    return res
      .status(err.statusCode || err.status || 500)
      .json({ error: { message: err.message || "something went wrong" } })
  }
}

export default handleUpdateSubjectListenerReq
