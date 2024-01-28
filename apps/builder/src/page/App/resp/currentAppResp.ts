import {
  ActionContent,
  AppInfoShape,
  ComponentTreeNode,
} from "@flowagent-public/public-types"
import { ActionItem } from "@flowagent-public/public-types"
import { DependenciesState } from "@/redux/currentApp/executionTree/executionState"

export interface CurrentAppResp {
  appInfo: AppInfoShape
  components: ComponentTreeNode
  actions: ActionItem<ActionContent>[]
  dependenciesState: DependenciesState
  executionState: Record<string, any>
}
