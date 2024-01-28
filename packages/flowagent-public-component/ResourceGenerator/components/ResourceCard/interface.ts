import { ResourceType } from "@flowagent-public/public-types"

export interface ResourceCardSelectorProps {
  resourceType: ResourceType
  onSelect?: (item: ResourceType) => void
}
