import ReactJson from "react-json-view"
import { Title } from "react-admin"

const JsonDataViewer = ({ record, source, label }) =>
  source ? (
    <>
      <h3>{label || source}:</h3>
      <ReactJson
        src={source ? record[source] : record}
        theme="google"
        displayDataTypes={false}
        collapsed={1}
      />
    </>
  ) : (
    <ReactJson
      src={source ? record[source] : record}
      theme="google"
      displayDataTypes={false}
      collapsed={1}
    />
  )

export default JsonDataViewer
