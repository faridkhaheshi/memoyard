import Typography from "@mui/material/Typography"
import { usePanelContext } from "../../contexts/panel"
import useOrgGroups from "../../hooks/use-org-groups"
import GroupsTable from "./GroupsTable"

const OrgGroups = () => {
  const { slug } = usePanelContext()
  const { groups, isGroupInfoLoading, regreshGroupInfo } = useOrgGroups(slug)

  if (isGroupInfoLoading) return <Typography variant="p">Loading...</Typography>

  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <GroupsTable groups={groups} />
    </div>
  )
}

export default OrgGroups
