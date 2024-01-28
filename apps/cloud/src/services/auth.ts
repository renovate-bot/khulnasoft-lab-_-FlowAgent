import {
  authCloudRequest,
  notNeedAuthCloudRequest,
} from "@flowagent-public/flowagent-net"
import { CurrentUserInfo } from "@flowagent-public/public-types"

interface SignInRequestBody {
  email: string
  password: string
}
export const fetchSignIn = (data?: SignInRequestBody) => {
  return notNeedAuthCloudRequest<CurrentUserInfo>({
    url: "/auth/signin",
    method: "POST",
    data,
  })
}

export const fetchLogout = async (token: string) => {
  return await authCloudRequest({
    method: "POST",
    url: "/users/logout",
    headers: {
      Authorization: token,
    },
  })
}
