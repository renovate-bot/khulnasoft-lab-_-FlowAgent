import { authCloudRequest } from "@flowagent-public/flowagent-net"
import { CurrentUserInfo } from "@flowagent-public/public-types"

export const fetchChangeNickname = (nickname: string) => {
  return authCloudRequest<{}>({
    url: "/users/nickname",
    method: "PATCH",
    data: {
      nickname,
    },
  })
}

export const fetchChangeLanguage = (language: string) => {
  return authCloudRequest<CurrentUserInfo>({
    url: "/users/language",
    method: "PATCH",
    data: {
      language,
    },
  })
}

export const fetchChangePassword = (
  currentPassword: string,
  newPassword: string,
) => {
  return authCloudRequest({
    url: "/users/password",
    method: "PATCH",
    data: {
      currentPassword,
      newPassword,
    },
  })
}
