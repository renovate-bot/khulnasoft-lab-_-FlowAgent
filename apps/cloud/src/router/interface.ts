import { RouteObject } from "react-router-dom"

export type FLOWAGENTRoutesObject = RouteObject & {
  /**
   * @description child route
   */
  children?: FLOWAGENTRoutesObject[]
  /**
   * @description need login
   */
  needLogin?: boolean
}
