import { ActionContent } from "@flowagent-public/public-types"
import { ActionItem } from "@flowagent-public/public-types"
import {
  FLOWAGENT_WEBSOCKET_CONTEXT,
  FLOWAGENT_WEBSOCKET_STATUS,
} from "@/api/ws/interface"

export type IllaMode = "preview" | "edit" | "production" | "template-edit"

export interface ConfigState {
  openLeftPanel: boolean
  openBottomPanel: boolean
  openRightPanel: boolean
  openDebugger: boolean
  showDot: boolean
  scale: number
  selectedComponents: string[]
  selectedAction: ActionItem<ActionContent> | null
  cachedAction: ActionItem<ActionContent> | null
  expandedKeys: string[]
  expandedWidgets: Record<string, boolean>
  mode: IllaMode
  canvasHeight: number
  canvasWidth: number
  isOnline: boolean
  wsStatus: Record<FLOWAGENT_WEBSOCKET_CONTEXT, FLOWAGENT_WEBSOCKET_STATUS>
  hoveredComponents: string[]
}

export const ConfigInitialState: ConfigState = {
  openLeftPanel: true,
  mode: "edit",
  openBottomPanel: true,
  openRightPanel: true,
  openDebugger: false,
  scale: 100,
  selectedComponents: [],
  selectedAction: null,
  cachedAction: null,
  showDot: false,
  expandedKeys: [],
  canvasHeight: 1080,
  canvasWidth: 1920,
  isOnline: true,
  hoveredComponents: [],
  expandedWidgets: {},
  wsStatus: {
    [FLOWAGENT_WEBSOCKET_CONTEXT.DASHBOARD]: FLOWAGENT_WEBSOCKET_STATUS.INIT,
    [FLOWAGENT_WEBSOCKET_CONTEXT.APP]: FLOWAGENT_WEBSOCKET_STATUS.INIT,
    [FLOWAGENT_WEBSOCKET_CONTEXT.APP_BINARY]: FLOWAGENT_WEBSOCKET_STATUS.INIT,
    [FLOWAGENT_WEBSOCKET_CONTEXT.AI_AGENT]: FLOWAGENT_WEBSOCKET_STATUS.INIT,
  },
}
