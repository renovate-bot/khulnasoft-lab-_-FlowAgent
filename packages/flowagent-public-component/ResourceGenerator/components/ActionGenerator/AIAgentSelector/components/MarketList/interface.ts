import { MARKET_AGENT_SORTED_OPTIONS } from "@flowagent-public/market-agent"
import { Agent } from "@flowagent-public/public-types"

export interface MarketAgentListProps {
  onSelect: (item: Agent) => void
  search: string
  sortBy: MARKET_AGENT_SORTED_OPTIONS
}
