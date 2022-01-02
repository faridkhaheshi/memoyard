import { useRouter } from "next/router"

const DemoGuideForCode = () => {
  const {
    query: { ref },
  } = useRouter()

  const isDemo = ref
    ? /^\/(fantasy|dreamhouse)\/.*/g.test(new URL(ref).pathname)
    : null
  if (!isDemo) return null

  return (
    <small>
      Use <em>123456</em> for a demo account
    </small>
  )
}

export default DemoGuideForCode
