import { load } from "@fingerprintjs/fingerprintjs"
import { FLOWAGENTPublicStorage } from "@flowagent-public/utils"

const generateUUID = async () => {
  const fp = await load()
  const result = await fp.get()
  return result.visitorId
}

export const getDeviceUUID = async () => {
  if (!FLOWAGENTPublicStorage.getLocalStorage("deviceID")) {
    const deviceID = await generateUUID()
    FLOWAGENTPublicStorage.setLocalStorage("deviceID", deviceID)
  }
  return FLOWAGENTPublicStorage.getLocalStorage("deviceID") as string
}

export const getBrowserLanguage = () => {
  return navigator.language || ""
}

export const getIllaLanguage = () => {
  return localStorage.getItem("i18nextLng") || ""
}
