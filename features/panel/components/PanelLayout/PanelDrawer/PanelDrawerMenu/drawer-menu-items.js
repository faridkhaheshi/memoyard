import ChildCareIcon from "@mui/icons-material/ChildCare"
import GroupsIcon from "@mui/icons-material/Groups"
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation"
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import HouseIcon from "@mui/icons-material/House"
import LogoutIcon from "@mui/icons-material/Logout"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PermMediaIcon from "@mui/icons-material/PermMedia"

const drawerMenuItems = [
  { text: "Dashboard", Icon: DashboardIcon, href: "/" },
  { text: "Classes", Icon: GroupsIcon, href: "/classes" },
  { text: "Kids", Icon: ChildCareIcon, href: "/kids" },
  { text: "Teachers", Icon: BabyChangingStationIcon, href: "/teachers" },
  // { text: "Parents", Icon: FamilyRestroomIcon, href: "/parents" },
  // { text: "Media", Icon: PermMediaIcon, href: "/media" },
  // { text: "School Info", Icon: HouseIcon, href: "/school-info" },
  // { text: "Profile", Icon: ManageAccountsIcon, href: "/profile" },
  { text: "Log Out", Icon: LogoutIcon, onClick: "logOut" },
]

export default drawerMenuItems
