import { ResourceType } from "@flowagent-public/public-types"

export interface ResourceHeaderProps {
  resourceType: ResourceType
  onClickBack: () => void
}
