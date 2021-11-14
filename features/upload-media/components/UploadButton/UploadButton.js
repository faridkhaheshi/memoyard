import MemoButton from "../../../../components/MemoButton"

const UploadButton = ({ files }) => {
  if (files.length === 0) return null
  return <MemoButton large>Upload</MemoButton>
}

export default UploadButton
