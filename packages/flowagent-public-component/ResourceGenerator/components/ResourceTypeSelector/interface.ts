import { ResourceType } from "@flowagent-public/public-types"

export interface ResourceTypeSelectorProps {
  onSelect: (item: ResourceType) => void
  filterResourceType?: (item: ResourceType) => boolean
}
