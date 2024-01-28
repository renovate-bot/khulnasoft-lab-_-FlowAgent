import { getCurrentId } from "@flowagent-public/user-data"
import { FLOWAGENTRoute } from "@/router"
import store from "../store"

export const getCurrentTeamID = () => {
  return getCurrentId(store.getState())
}

// maybe not same as current team
export const getCurrentTeamIdentifier = () => {
  return FLOWAGENTRoute.state.matches[0].params.teamIdentifier
}
