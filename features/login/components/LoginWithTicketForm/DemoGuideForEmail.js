import { useRouter } from "next/router"

const DemoGuideForEmail = () => {
  const {
    query: { ref },
  } = useRouter()

  const isDemo = ref
    ? /^\/(fantasy|dreamhouse)\/.*/g.test(new URL(ref).pathname)
    : null
  if (!isDemo) return null

  return (
    <small>
      Use <em>demoadmin@memoyard.com</em> for a demo
    </small>
  )
}

export default DemoGuideForEmail
