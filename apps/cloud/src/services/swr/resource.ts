import { builderRequest } from "@flowagent-public/flowagent-net"
import { Resource, ResourceContent } from "@flowagent-public/public-types"
import { getCurrentTeamInfo } from "@flowagent-public/user-data"
import { useSelector } from "react-redux"
import useSWR from "swr"

export const useResourceList = (canAccessResourceList: boolean) => {
  const currentTeamInfo = useSelector(getCurrentTeamInfo)

  return useSWR(
    ["/resources", currentTeamInfo?.id, canAccessResourceList],
    ([url, teamID]) =>
      canAccessResourceList
        ? builderRequest<Resource<ResourceContent>[]>(
            {
              url: url,
              method: "GET",
            },
            { teamID },
          ).then((res) => res.data)
        : [],
  )
}

export const fetchDeleteResource = async (
  resourceID: string,
  teamID: string,
) => {
  return builderRequest<Resource<ResourceContent>>(
    {
      url: `/resources/${resourceID}`,
      method: "DELETE",
    },
    {
      teamID,
    },
  )
}
