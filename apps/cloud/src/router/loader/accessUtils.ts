import { TeamInfo, USER_ROLE } from "@flowagent-public/public-types"
import { isBiggerThanTargetRole } from "@flowagent-public/user-role-utils"

export const canMemberAccess = (teamInfo?: TeamInfo) => {
  if (!teamInfo) return false
  const currentUserRole = teamInfo?.myRole
  const allowEditorManageTeamMember =
    teamInfo?.permission?.allowEditorManageTeamMember
  const allowViewerManageTeamMember =
    teamInfo?.permission?.allowViewerManageTeamMember
  if (allowViewerManageTeamMember && allowEditorManageTeamMember) {
    return isBiggerThanTargetRole(USER_ROLE.VIEWER, currentUserRole)
  } else {
    return [USER_ROLE.OWNER, USER_ROLE.ADMIN].includes(currentUserRole)
  }
}
