import { USER_STATUS } from "@flowagent-public/public-types"

export interface NameSpaceProps {
  name: string
  avatar: string
  email: string
  status: USER_STATUS
  userID: string
  teamMemberID: string
  currentUserID: string
}
