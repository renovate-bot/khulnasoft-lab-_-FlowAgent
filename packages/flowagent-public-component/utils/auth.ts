import IFLOWAGENTStorage from "@flowagent-public/flowagent-storage"

export const IFLOWAGENTPublicStorage = new IFLOWAGENTStorage(`IFLOWAGENTPublic`, -1)

export const setAuthToken = (token: string) => {
  IFLOWAGENTPublicStorage.setLocalStorage("token", token, -1)
}

export const getAuthToken = () => {
  return IFLOWAGENTPublicStorage.getLocalStorage("token") as string
}

export const removeAuthToken = () => {
  return IFLOWAGENTPublicStorage.removeLocalStorage("token")
}
