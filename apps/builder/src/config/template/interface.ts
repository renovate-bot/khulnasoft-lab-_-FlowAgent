import {
  ActionContent,
  ResourceContent,
  ResourceType,
} from "@flowagent-public/public-types"
import { ActionItem } from "@flowagent-public/public-types"

export type TemplateResources = {
  resourceName: string
  resourceType: ResourceType
  content: ResourceContent
}[]

export type TemplateAction<T extends ActionContent> = Partial<ActionItem<T>> & {
  // The resourceIndex here is used to replace the real resourceID later.
  resourceIndex: number
}

export type TemplateActions = TemplateAction<ActionContent>[]
