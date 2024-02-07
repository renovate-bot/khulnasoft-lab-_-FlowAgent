import {
  FLOWAGENTMixpanel,
  FLOWAGENTProperties,
  FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME,
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
  FLOWAGENT_PAGE_NAME,
} from "@flowagent-public/mixpanel-utils"
import { getCurrentTeamInfo, getCurrentUser } from "@flowagent-public/user-data"
import {
  getIllaMode,
  getIsFLOWAGENTProductMode,
} from "@/redux/config/configSelector"
import { getAppInfo } from "@/redux/currentApp/appInfo/appInfoSelector"
import { getRootComponentNode } from "@/redux/currentApp/components/componentsSelector"
import { getExecutionResult } from "@/redux/currentApp/executionTree/executionSelector"
import { getGuideInfo } from "@/redux/guide/guideSelector"
import { FLOWAGENTRoute } from "@/router"
import store from "@/store"

const getInfoFromUrl = () => {
  const { state } = FLOWAGENTRoute
  const { matches } = state
  const match = matches[0]?.params || {}
  return {
    appId: match.appId,
    teamIdentifier: match.teamIdentifier,
  }
}

const getPreviewInfo = () => {
  const rootState = store.getState()
  const rootNode = getRootComponentNode(rootState)
  const isProduction = getIsFLOWAGENTProductMode(rootState)
  const rootProps = rootNode?.props
  if (!rootProps)
    return {
      w: "auto",
      h: "auto",
    }
  const { viewportWidth = "auto", viewportHeight = "auto" } = rootProps
  return {
    w: isProduction ? "auto" : viewportWidth,
    h: isProduction ? "auto" : viewportHeight,
  }
}

const getPageInfo = () => {
  const rootState = store.getState()
  const executionResult = getExecutionResult(rootState)
  const rootExecutionProps = executionResult.root
  let result: Record<string, unknown>[] = []
  if (!rootExecutionProps) return result
  const { pageSortedKey, homepageDisplayName } = rootExecutionProps
  if (!Array.isArray(pageSortedKey) || pageSortedKey.length === 0) return result
  pageSortedKey.forEach((key) => {
    const pageInfo = executionResult[key]
    if (!pageInfo) return
    const childrenNode = (pageInfo.$childrenNode || []) as string[]
    let leftViews: number = 0
    let rightViews: number = 0
    let headerViews: number = 0
    let footerViews: number = 0
    let bodyViews: number = 0
    childrenNode.forEach((node) => {
      const nodeInfo = executionResult[node]
      if (!nodeInfo) return
      const { displayName, viewSortedKey } = nodeInfo
      const viewsNumber = Array.isArray(viewSortedKey)
        ? viewSortedKey.length
        : 0
      if (displayName.startsWith("left")) {
        leftViews = viewsNumber
      } else if (displayName.startsWith("right")) {
        rightViews = viewsNumber
      } else if (displayName.startsWith("header")) {
        headerViews = viewsNumber
      } else if (displayName.startsWith("footer")) {
        footerViews = viewsNumber
      } else if (displayName.startsWith("body")) {
        bodyViews = viewsNumber
      }
    })
    const item = {
      homepage: (homepageDisplayName || pageSortedKey[0]) === key,
      left: leftViews,
      right: rightViews,
      header: headerViews,
      footer: footerViews,
      body: bodyViews,
    }
    result.push(item)
  })
  return result
}

const getTeamInfo = () => {
  const teamInfo = getCurrentTeamInfo(store.getState())
  return {
    role: teamInfo?.myRole || "-1",
  }
}

const getAppType = () => {
  const rootState = store.getState()
  const guide = getGuideInfo(rootState)
  return guide.isOpen ? "Onboarding app" : "Normal"
}

const getAppIsPublish = () => {
  const rootState = store.getState()
  const appInfo = getAppInfo(rootState)
  return appInfo.deployed
}

const getAppIsPublic = () => {
  const rootState = store.getState()
  const appInfo = getAppInfo(rootState)
  return appInfo.config.public
}

const getUserID = () => {
  const userInfo = getCurrentUser(store.getState())
  return userInfo?.userID || ""
}

const getAPPMode = () => {
  const rootState = store.getState()
  const appMode = getIllaMode(rootState)
  return appMode
}

const getPageName = () => {
  const appMode = getAPPMode()
  switch (appMode) {
    case "edit": {
      return FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.EDITOR
    }
    case "preview": {
      return FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.PREVIEW
    }
    case "production": {
      return FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.DEPLOY
    }
    default: {
      return FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.EDITOR
    }
  }
}

export const track = (
  event: FLOWAGENT_MIXPANEL_EVENT_TYPE,
  pageName: FLOWAGENT_PAGE_NAME,
  properties: Omit<
    FLOWAGENTProperties,
    "parameter11" | "team_id" | "page"
  > = {},
) => {
  const { teamIdentifier } = getInfoFromUrl()
  const { role } = getTeamInfo()
  const userID = getUserID()
  FLOWAGENTMixpanel.track(event, {
    ...properties,
    page: pageName,
    user_id: userID,
    parameter11: role,
    team_id: teamIdentifier,
  })
}

export const trackInEditor = (
  event: FLOWAGENT_MIXPANEL_EVENT_TYPE,
  properties: Omit<
    FLOWAGENTProperties,
    | "parameter5"
    | "parameter6"
    | "parameter7"
    | "parameter8"
    | "parameter9"
    | "parameter10"
    | "parameter11"
    | "team_id"
    | "page"
    | "user_id"
  > = {},
) => {
  const previewInfo = getPreviewInfo()
  const pageInfo = getPageInfo()
  const appType = getAppType()
  const isPublish = getAppIsPublish()
  const isPublic = getAppIsPublic()
  const pageName = getPageName()
  const { appId } = getInfoFromUrl()
  track(event, pageName, {
    ...properties,
    parameter5: appId,
    parameter6: previewInfo,
    parameter7: pageInfo,
    parameter8: appType,
    parameter9: isPublish,
    parameter10: isPublic,
  })
}

export const trackPageDurationStart = () => {
  FLOWAGENTMixpanel.pageTimeEvent()
}

export const trackPageDurationEnd = (pageName: FLOWAGENT_PAGE_NAME) => {
  const { teamIdentifier } = getInfoFromUrl()

  FLOWAGENTMixpanel.trackTimeEvent(pageName, teamIdentifier ?? "-1")
}

export const resourceContextHelper = (parameter1: string) => {
  return (
    event: FLOWAGENT_MIXPANEL_EVENT_TYPE,
    pageName: FLOWAGENT_PAGE_NAME,
    properties: Omit<FLOWAGENTProperties, "page">,
  ) => {
    const mergeParam = parameter1 ? { ...properties, parameter1 } : properties
    track(event, pageName, mergeParam)
  }
}
