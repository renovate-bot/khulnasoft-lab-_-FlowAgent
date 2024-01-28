import { ERROR_FLAG, isIFLOWAGENTAPiError } from "@flowagent-public/flowagent-net"
import {
  IFLOWAGENTMixpanel,
  IFLOWAGENTProperties,
  IFLOWAGENT_MIXPANEL_EVENT_TYPE,
  IFLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME,
} from "@flowagent-public/mixpanel-utils"
import { SUBSCRIBE_PLAN } from "@flowagent-public/public-types"
import { getIFLOWAGENTCloudURL, isIllaErrorInterface } from "@flowagent-public/utils"
import { createCollarModal, createTeamLimitModal } from "./hook"
import { CollarModalType, FREE_TEAM_LIMIT_TYPE } from "./interface"

export function getSuccessRedirectWithParams(
  params: Record<string, string | number>,
): string {
  const redirectPath = "/landing/subscribed"
  const paramString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&")

  return `${getIFLOWAGENTCloudURL()}${redirectPath}?${paramString}`
}

export const handleCollaPurchaseError = (
  e: unknown,
  modalType: CollarModalType,
  from: string,
) => {
  const collaModal = createCollarModal()
  if (
    isIFLOWAGENTAPiError(e) &&
    (e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_COFLOWAGENT ||
      e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_DRIVE_VOLUME ||
      e.data.errorFlag ===
        ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_AI_TOKEN_GENERAL ||
      e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_AUTO_CHARGE_COFLOWAGENT_FAILED ||
      e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_DRIVE_TRAFFIC ||
      e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_COFLOWAGENT_PAYMENT_FAILURE ||
      e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_OUT_OF_USAGE_TRAFFIC ||
      e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_OUT_OF_USAGE_VOLUME ||
      e.data.errorFlag ===
        ERROR_FLAG.ERROR_FLAG_AI_AGENT_MAX_TOKEN_OVER_COFLOWAGENT_BALANCE)
  ) {
    collaModal?.({
      modalType,
      from,
    })
    return true
  }
  return false
}

export const handleCollaPurchaseErrorByIFLOWAGENTInnerError = (
  e: unknown,
  modalType: CollarModalType,
  from: string,
) => {
  const collaModal = createCollarModal()
  if (
    isIllaErrorInterface(e) &&
    (e.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_COFLOWAGENT ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_DRIVE_VOLUME ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_AI_TOKEN_GENERAL ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_AUTO_CHARGE_COFLOWAGENT_FAILED ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_INSUFFICIENT_DRIVE_TRAFFIC ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_COFLOWAGENT_PAYMENT_FAILURE ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_OUT_OF_USAGE_TRAFFIC ||
      e.errorFlag === ERROR_FLAG.ERROR_FLAG_OUT_OF_USAGE_VOLUME ||
      e.errorFlag ===
        ERROR_FLAG.ERROR_FLAG_AI_AGENT_MAX_TOKEN_OVER_COFLOWAGENT_BALANCE)
  ) {
    collaModal?.({
      modalType,
      from,
    })
    return true
  }
  return false
}

export const handleFreeTeamLimitError = (
  e: unknown,
  modalType: FREE_TEAM_LIMIT_TYPE,
) => {
  const limitTeamModal = createTeamLimitModal()
  if (
    isIFLOWAGENTAPiError(e) &&
    e.data.errorFlag === ERROR_FLAG.ERROR_FLAG_OVER_MAX_FREE_TEAM_LIMIT
  ) {
    limitTeamModal?.({
      modalType,
    })
    return true
  }
  return false
}

export const isSubscribeForDrawer = (subscribePlan?: SUBSCRIBE_PLAN) => {
  return (
    subscribePlan === SUBSCRIBE_PLAN.TEAM_LICENSE_ENTERPRISE ||
    subscribePlan === SUBSCRIBE_PLAN.TEAM_LICENSE_PREMIUM ||
    subscribePlan === SUBSCRIBE_PLAN.TEAM_LICENSE_INSUFFICIENT ||
    subscribePlan === SUBSCRIBE_PLAN.DRIVE_VOLUME_PAID ||
    subscribePlan === SUBSCRIBE_PLAN.DRIVE_VOLUME_INSUFFICIENT ||
    subscribePlan === SUBSCRIBE_PLAN.COFLOWAGENT_SUBSCRIBE_INSUFFICIENT ||
    subscribePlan === SUBSCRIBE_PLAN.COFLOWAGENT_SUBSCRIBE_PAID
  )
}

export const track = (
  event: IFLOWAGENT_MIXPANEL_EVENT_TYPE,
  properties: Omit<IFLOWAGENTProperties, "page"> = {},
  userType: string,
  teamID: string | undefined,
  userID: string | undefined,
) => {
  IFLOWAGENTMixpanel.track(event, {
    page: IFLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME.PLACEHOLDER,
    ...properties,
    team_id: teamID ?? "-1",
    user_id: userID ?? "-1",
    parameter11: userType,
  })
}
