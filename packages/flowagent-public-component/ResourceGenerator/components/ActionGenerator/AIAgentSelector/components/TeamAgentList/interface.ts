import { Agent } from "@flowagent-public/public-types"

export interface TeamAgentListComponentProps {
  data: Agent[]
  index: number
  isScrolling?: boolean
}

export interface TeamAgentListProps {
  onSelect: (item: Agent) => void
  search: string
}
