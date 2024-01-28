import { getFLOWAGENTCloudURL } from "@flowagent-public/utils"
import { redirect } from "react-router-dom"
import { RoutesObjectPro } from "../interface"
import { publicRouterConfig, publicTeamChildrenRouter } from "./public"

export const selfRouter: RoutesObjectPro[] = [
  {
    index: true,
    loader: async () => {
      return redirect(getFLOWAGENTCloudURL())
    },
  },
  ...publicTeamChildrenRouter,
  ...publicRouterConfig,
]
