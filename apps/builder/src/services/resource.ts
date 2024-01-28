import { builderRequest } from "@flowagent-public/flowagent-net"
import { Resource, ResourceContent } from "@flowagent-public/public-types"
import { getCurrentTeamID } from "../utils/team"

export const fetchResources = (signal: AbortSignal) => {
  return builderRequest<Resource<ResourceContent>[]>(
    {
      url: "/resources",
      method: "GET",
      signal: signal,
    },
    { teamID: getCurrentTeamID() },
  )
}

interface IResourceMeta {
  Success: boolean
  Schema: Record<string, unknown>
}

export const fetchResourceMeta = async (resourceID: string) => {
  return builderRequest<IResourceMeta>(
    {
      url: `/resources/${resourceID}/meta`,
      method: "GET",
    },
    {
      teamID: getCurrentTeamID(),
    },
  )
}

export const getOAuthRefreshData = async (
  resourceID: string,
  signal: AbortSignal,
) => {
  return builderRequest<Resource<ResourceContent>>(
    {
      url: `/resources/${resourceID}/refresh`,
      method: "POST",
      signal,
    },
    {
      teamID: getCurrentTeamID(),
    },
  )
}
