import { useAdmin } from "../../contexts/admin"

const AdminProfile = () => {
  const { admin } = useAdmin()
  return (
    <div>
      <pre>{JSON.stringify(admin, null, 2)}</pre>
    </div>
  )
}

export default AdminProfile
