import { ResourceType } from "@flowagent-public/public-types"
import { ReactNode } from "react"

export interface ConfigElementProviderProps {
  children: ReactNode
  resourceID?: string
  resourceType: ResourceType
}
