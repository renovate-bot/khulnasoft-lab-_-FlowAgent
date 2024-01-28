import { Agent } from "@flowagent-public/public-types"

export interface AddTeamAIAgentPayload {
  aiAgent: Agent
}

export interface ModifyTeamAIAgentPayload {
  aiAgentID: string
  modifiedProps: Partial<Agent>
}
