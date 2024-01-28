import { Middleware, isAction } from "@reduxjs/toolkit"
import { flowagentSnapshot } from "@/page/App/components/DotPanel/constant/snapshotNew"
import { getExecutionWidgetLayoutInfo } from "@/redux/currentApp/executionTree/executionSelector"
import { RootState } from "@/store"
import { receiveMessage } from "./receiveMessages"
import { sendMessage } from "./sendMessage"

export const reduxAsync: Middleware = (store) => (next) => (action) => {
  if (!isAction(action) || !("payload" in action)) {
    return next(action)
  }
  const { type } = action
  const typeList = type.split("/")
  const isRemoteAction = typeList[typeList.length - 1] === "remote"
  const currentAppID = store.getState().currentApp.appInfo.appId ?? ""
  if (isRemoteAction) {
    receiveMessage(action, currentAppID)
    const resp = next(action) as RootState
    if (typeList[0] === "components") {
      const nextRootState = store.getState()
      const snapShot = getExecutionWidgetLayoutInfo(nextRootState)
      flowagentSnapshot.setSnapshot(snapShot)
    }
    return resp
  }
  const prevRootState = store.getState()
  const resp = next(action)
  try {
    sendMessage(prevRootState, store.getState(), action)
  } catch (e) {
    console.log(e)
  }
  return resp
}
