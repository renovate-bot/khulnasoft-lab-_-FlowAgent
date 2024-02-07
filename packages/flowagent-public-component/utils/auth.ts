import FLOWAGENTStorage from "@flowagent-public/flowagent-storage"

export const FLOWAGENTPublicStorage = new FLOWAGENTStorage(`FLOWAGENTPublic`, -1)

export const setAuthToken = (token: string) => {
  FLOWAGENTPublicStorage.setLocalStorage("token", token, -1)
}

export const getAuthToken = () => {
  return FLOWAGENTPublicStorage.getLocalStorage("token") as string
}

export const removeAuthToken = () => {
  return FLOWAGENTPublicStorage.removeLocalStorage("token")
}
