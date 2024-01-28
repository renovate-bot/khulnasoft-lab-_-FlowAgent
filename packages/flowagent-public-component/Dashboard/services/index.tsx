import { notNeedAuthRequest } from "@flowagent-public/flowagent-net"

interface IWhiteListIPResponse {
  resources: string[]
}

export const fetchWhiteListIP = async () => {
  return await notNeedAuthRequest<IWhiteListIPResponse>({
    url: "https://peripheral-api.flowagentsoft.com/v1/meta",
    method: "GET",
  })
}
