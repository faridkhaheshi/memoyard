import Typography from "@mui/material/Typography"
import { usePanelContext } from "../../contexts/panel"
import useOrgGroups from "../../hooks/use-org-groups"
import GroupsTable from "./GroupsTable"
import GroupAdder from "./GroupAdder"

const OrgGroups = () => {
  const { slug } = usePanelContext()
  const { groups, isGroupInfoLoading, refreshGroupInfo } = useOrgGroups(slug)

  if (isGroupInfoLoading) return <Typography variant="p">Loading...</Typography>

  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <GroupAdder refresh={refreshGroupInfo} />
      <GroupsTable groups={groups} />
    </div>
  )
}

export default OrgGroups
