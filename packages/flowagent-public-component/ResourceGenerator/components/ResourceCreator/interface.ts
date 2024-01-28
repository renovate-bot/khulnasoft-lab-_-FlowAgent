import { ResourceType } from "@flowagent-public/public-types"
import { ResourceCreatorPage } from "../../interface"

export interface ResourceCreatorProps {
  resourceID?: string
  resourceType?: ResourceType
  onBack: (page: ResourceCreatorPage) => void
}
