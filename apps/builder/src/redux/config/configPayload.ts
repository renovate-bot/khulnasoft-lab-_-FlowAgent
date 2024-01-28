import {
  FLOWAGENT_WEBSOCKET_CONTEXT,
  FLOWAGENT_WEBSOCKET_STATUS,
} from "@/api/ws/interface"

export interface UpdateCanvasShapePayload {
  canvasWidth: number
  canvasHeight: number
}

export interface UpdateWSStatusPayload {
  context: FLOWAGENT_WEBSOCKET_CONTEXT
  wsStatus: FLOWAGENT_WEBSOCKET_STATUS
}
