import { ResourceType } from "@flowagent-public/public-types"

export interface ResourceCreatePanelProps {
  resourceType: ResourceType
  resourceID?: string
  handleOnClickBack: () => void
}
