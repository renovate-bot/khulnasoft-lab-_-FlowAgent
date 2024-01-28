import { FLOWAGENTRoute } from "@/router"

export const getParamsFromIllaRoute = (key: string) => {
  const routerParams = FLOWAGENTRoute.state.matches[0].params
  return routerParams[key]
}
