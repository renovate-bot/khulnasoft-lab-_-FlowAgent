import { builderRequest } from "@flowagent-public/flowagent-net"
import { Resource, ResourceContent } from "@flowagent-public/public-types"

export const requestUpdateResource = async (
  teamID: string,
  resourceID: string,
  data: unknown,
) => {
  const url = `/resources/${resourceID}`
  return await builderRequest<Resource<ResourceContent>>(
    {
      url,
      method: "PUT",
      data,
    },
    {
      teamID,
    },
  )
}

export const requestCreateResource = async (teamID: string, data: unknown) => {
  return await builderRequest<Resource<ResourceContent>>(
    {
      url: "/resources",
      method: "POST",
      data,
    },
    {
      teamID,
    },
  )
}
