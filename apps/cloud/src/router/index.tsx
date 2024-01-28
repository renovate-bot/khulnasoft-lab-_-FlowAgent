import { isCloudVersion } from "@flowagent-public/utils"
import { createBrowserRouter } from "react-router-dom"
import { FLOWAGENTRoutesObject } from "@/router/interface"
import { routerConfig } from "@/router/routerConfig"
import { needAuthLoader } from "./loader/authLoader"

const wrappedRouter = (routesConfig: FLOWAGENTRoutesObject[]) => {
  return routesConfig.map((route) => {
    const { element, children, needLogin, ...otherRouterParams } = route
    const newRouteItem: FLOWAGENTRoutesObject = {
      element,
      ...otherRouterParams,
    }

    if (needLogin) {
      newRouteItem.loader = needAuthLoader
    }

    if (Array.isArray(children) && children.length) {
      newRouteItem.children = wrappedRouter(children)
    }
    return newRouteItem
  })
}

export const FLOWAGENTRoute = createBrowserRouter(wrappedRouter(routerConfig), {
  basename: import.meta.env.PROD && !isCloudVersion ? "/cloud" : "/",
})
