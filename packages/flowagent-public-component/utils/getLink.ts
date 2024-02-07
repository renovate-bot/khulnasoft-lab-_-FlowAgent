import { isCloudVersion, isServerRender } from "./typeHelper"

export const getFLOWAGENTBuilderURL = (): string => {
  if (process.env.FLOWAGENT_BUILDER_URL || isCloudVersion || isServerRender) {
    return `${process.env.FLOWAGENT_BUILDER_URL}`
  } else {
    return `${location.origin}/build`
  }
}

export const getFLOWAGENTCloudURL = (): string => {
  if (process.env.FLOWAGENT_CLOUD_URL || isCloudVersion || isServerRender) {
    return `${process.env.FLOWAGENT_CLOUD_URL}`
  } else {
    return `${location.origin}/cloud`
  }
}

export const getMarketLinkTemplate = (appID: string): string => {
  return `${process.env.FLOWAGENT_MARKET_URL}/app/${appID}/detail`
}

export const getPublicLinkTemplate = (
  teamIdentify: string,
  appID: string,
): string => {
  return `${process.env.FLOWAGENT_BUILDER_URL}/${teamIdentify}/deploy/app/${appID}`
}

export const getAgentPublicLink = (agentID: string): string => {
  return `${process.env.FLOWAGENT_MARKET_URL}/ai-agent/${agentID}/detail`
}

export const getFlowEditLink = (
  teamIdentify: string,
  flowID: string,
): string => {
  return `${process.env.FLOWAGENT_FLOW_URL}/${teamIdentify}/flow/${flowID}`
}
