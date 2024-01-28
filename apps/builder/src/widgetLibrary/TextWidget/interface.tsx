import { TextProps as FLOWAGENTTextProps } from "@flowagent-design/react"
import { TooltipWrapperProps } from "@/widgetLibrary/PublicSector/TooltipWrapper/interface"
import { BaseWidgetProps } from "@/widgetLibrary/interface"

export type HorizontalAlign = "start" | "center" | "end"
export type VerticalAlign = "start" | "center" | "end"

export interface TextProps extends FLOWAGENTTextProps {
  value?: string
  weight?: number
  disableMarkdown?: boolean
  horizontalAlign?: HorizontalAlign
  verticalAlign?: VerticalAlign
}

export interface TextWidgetProps
  extends Omit<TextProps, "h" | "w">,
    BaseWidgetProps,
    TooltipWrapperProps {
  dynamicHeight: "auto" | "fixed" | "limited"
  dynamicMaxHeight?: number
  dynamicMinHeight?: number
}
