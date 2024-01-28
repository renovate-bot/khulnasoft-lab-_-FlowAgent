import {
  ActionItem,
  RestAPIAction,
  RestAPIBodyContent,
} from "@flowagent-public/public-types"

export interface BodyEditorProps {
  actionItem: ActionItem<RestAPIAction<RestAPIBodyContent>>
}
