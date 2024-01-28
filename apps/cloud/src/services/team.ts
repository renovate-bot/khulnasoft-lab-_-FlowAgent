import { authCloudRequest } from "@flowagent-public/flowagent-net"
import { TeamInfo } from "@flowagent-public/public-types"

export const fetchCurrentUserTeamsInfo = () => {
  return authCloudRequest<TeamInfo[]>({
    url: "/teams/my",
    method: "GET",
  })
}
