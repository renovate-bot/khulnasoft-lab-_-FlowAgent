import { ResourceType } from "@flowagent-public/public-types"

export interface ResourceGeneratorProps {
  visible: boolean
  onClose: () => void
  filterResourceType?: (resourceType: ResourceType) => boolean
  defaultConfig?: {
    defaultStep: ResourceCreatorPage
    defaultResourceType: ResourceType
    canBack?: boolean
  }
}

export type ResourceCreatorPage = "select" | "createResource"
