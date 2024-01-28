import {
  FLOWAGENTPublicStorage,
  getAuthToken,
  getFLOWAGENTCloudURL,
} from "@flowagent-public/utils"
import { fetchLogout } from "@/services/auth"
import { FLOWAGENTCloudStorage } from "@/utils/storage"

const CURRENT_TEAM_ID_KEY = "currentTeamID"

export const setLocalCurrentTeamID = (teamID: string) => {
  FLOWAGENTCloudStorage.setLocalStorage(CURRENT_TEAM_ID_KEY, teamID)
}

export const getLocalCurrentTeamID = () => {
  return FLOWAGENTCloudStorage.getLocalStorage(CURRENT_TEAM_ID_KEY)
}

export const removeLocalTeam = () => {
  return FLOWAGENTCloudStorage.removeLocalStorage("teamIdentifier")
}

export const onClickLogout = async () => {
  const FLOWAGENTToken = getAuthToken()
  FLOWAGENTPublicStorage.clearLocalStorage()
  if (!FLOWAGENTToken) {
    window.location.href = `${getFLOWAGENTCloudURL()}/login`
    return
  }
  try {
    await fetchLogout(FLOWAGENTToken)
  } catch (e) {
  } finally {
    window.location.href = `${getFLOWAGENTCloudURL()}/login`
  }
}
