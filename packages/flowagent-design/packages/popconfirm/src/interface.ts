import { ReactNode } from "react"
import { TriggerProps } from "@flowagent-design/trigger"
import { ButtonColorScheme, ButtonProps } from "@flowagent-design/button"

export interface PopconfirmProps
  extends Omit<TriggerProps, "content" | "hasCloseIcon" | "withoutPadding"> {
  title?: string
  cancelText?: string
  okText?: string
  okColorScheme?: ButtonColorScheme
  cancelColorScheme?: ButtonColorScheme
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  onOk?: () => void | Promise<any>
  onCancel?: () => void
  icon?: ReactNode
}
