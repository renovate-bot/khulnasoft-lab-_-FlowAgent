import { DividerTextAlign } from "@flowagent-design/react"
import { BaseWidgetProps } from "@/widgetLibrary/interface"

export interface WrappedDividerProps {
  text: string
  fs: string
  textAlign: DividerTextAlign
}

export interface DividerWidgetProps
  extends WrappedDividerProps,
    BaseWidgetProps {}
