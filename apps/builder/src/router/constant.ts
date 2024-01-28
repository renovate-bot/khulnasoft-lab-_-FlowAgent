import { getFLOWAGENTCloudURL } from "@flowagent-public/utils"

export const cloudRedirect = `${getFLOWAGENTCloudURL()}?redirectURL=${encodeURIComponent(
  location.origin + location.pathname,
)}`

export const needSavedSearchParams = [
  "inviteToken",
  "email",
  "appID",
  "teamIdentifier",
  "token",
  "redirectPage",
]
