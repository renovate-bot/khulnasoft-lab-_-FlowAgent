export type FLOWAGENTPanelType =
  | "none"
  | "data_component"
  | "data_action"
  | "data_page"
  | "data_global_state"
  | "action"
  | "canvas"
  | "widget_picker"
  | "components_config"
  | "page_config"
export interface ClickPosition {
  displayName: string
  type: "inner_container" | "component" | "group"
  clickPosition: number[]
}

export class FocusManager {
  private static currentFocus: FLOWAGENTPanelType = "none"
  private static currentClickPosition?: ClickPosition

  static switchFocus(
    flowagentPanelType: FLOWAGENTPanelType,
    clickPosition?: ClickPosition,
  ) {
    this.currentFocus = flowagentPanelType
    this.currentClickPosition = clickPosition
  }

  static getClickPosition(): ClickPosition | undefined {
    return this.currentClickPosition
  }

  static getFocus(): FLOWAGENTPanelType {
    return this.currentFocus
  }
}
