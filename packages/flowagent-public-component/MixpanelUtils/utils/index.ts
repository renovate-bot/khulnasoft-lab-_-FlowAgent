import { load } from "@fingerprintjs/fingerprintjs"
import { IFLOWAGENTPublicStorage } from "@flowagent-public/utils"

const generateUUID = async () => {
  const fp = await load()
  const result = await fp.get()
  return result.visitorId
}

export const getDeviceUUID = async () => {
  if (!IFLOWAGENTPublicStorage.getLocalStorage("deviceID")) {
    const deviceID = await generateUUID()
    IFLOWAGENTPublicStorage.setLocalStorage("deviceID", deviceID)
  }
  return IFLOWAGENTPublicStorage.getLocalStorage("deviceID") as string
}

export const getBrowserLanguage = () => {
  return navigator.language || ""
}

export const getIllaLanguage = () => {
  return localStorage.getItem("i18nextLng") || ""
}
