import {
  publicHashtagRequest,
  publicMarketplaceRequest,
} from "@flowagent-public/flowagent-net"
import { MarketAIAgent } from "@flowagent-public/market-agent"
import { ProductMarketApp } from "@flowagent-public/market-app"
import { HASHTAG_REQUEST_TYPE } from "../../constants"


export const fetchRecommendHashtag = (type: HASHTAG_REQUEST_TYPE) => {
  return publicHashtagRequest<{
    hashtags: string[]
  }>({
    method: "GET",
    url: `/defaultHashtagsList/unitType/${type}`,
  })
}

export const fetchAppDetailInfoByAppID = (appID: string) => {
  return publicMarketplaceRequest<ProductMarketApp>({
    method: "GET",
    url: `/apps/${appID}`,
  })
}

export const fetchAgentDetailInfoByAgentID = (aiAgentID: string) => {
  return publicMarketplaceRequest<MarketAIAgent>({
    method: "GET",
    url: `/aiAgents/${aiAgentID}`,
  })
}