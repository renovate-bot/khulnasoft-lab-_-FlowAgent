import { parse } from "qs"
import { getIsFLOWAGENTProductMode } from "@/redux/config/configSelector"
import store from "@/store"

export const generateUrlParams = () => {
  const href = window.location.href
  const query = href.split("?")[1]
  const queryArray = parse(query)
  let appURL = href
  if (getIsFLOWAGENTProductMode(store.getState())) {
    appURL = window.location.origin + window.location.pathname
  }
  return {
    query: queryArray,
    url: href,
    appURL,
  }
}
