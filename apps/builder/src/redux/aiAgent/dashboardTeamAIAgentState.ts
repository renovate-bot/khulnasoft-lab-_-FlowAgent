import { Agent } from "@flowagent-public/public-types"

export interface AIAgentState {
  list: Agent[]
}

export const AgentInitial: AIAgentState = {
  list: [],
}
